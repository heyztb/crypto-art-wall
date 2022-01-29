import formidable from "formidable";
import pinataSDK from '@pinata/sdk';

export const config = {
  api: {
    bodyParser: false
  }
}

const handler = async (req, res) => {
  const promise = new Promise((resolve, reject) => {
    const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
    const form = new formidable.IncomingForm({
      multiples: false,
      keepExtensions: true,
    });
    
    form.parse(req, (err, _fields, files) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }

      // we are explicitly assuming that only one file has been uploaded
      // this should always be the case for now at least
      // as the form on our webapp will not allow multiple uploads
      const file = Object.values(files)[0];
      pinata.pinFromFS(file.filepath).then((result) => {
        resolve({"hash": result.IpfsHash})
        return;
      }).catch((err) => {
        console.log(err);
        reject(err)
        return;
      })
    })
  })

  const { hash } = await promise;
  res.status(200).json({ hash });
}

export default handler;