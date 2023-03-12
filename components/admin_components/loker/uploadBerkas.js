import Image from "next/image";
export default function UploadBerkas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Upload Berkas</h2>
            <p>Silahkan Upload Lamaran Sesuai Dengan Persyaratan</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="product-image">
            <Image
              src="/dist/img/LogoIndomaret.png"
              className="h-auto w-auto"
              width={300}
              height={300}
              alt="#"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="product-info">
            <h4>Indomaret</h4>
            <p className="text-dark text-bold">Persyaratan</p>
            <span className="category m-2">
              Rapi <br />
              jujur <br />
              disiplin <br />
              bertanggung jawab <br />
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-body">
          <form action="#" className="dropzone dz-clickable" id="mydropzone">
            <div className="dz-default dz-message text-primary">
              <span style={{ fontSize: "30px" }}>
                Drop files here to upload
              </span>
            </div>
          </form>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
