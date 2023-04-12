import Image from "next/image";
import { useState } from "react";
export default function InputLoker() {
  const [namaInstansi, setNamaInstansi] = useState("");
  const [persyaratan, setPersyaratan] = useState("");
  // TODO: Add function to add new loker
  // TODO: Add function to upload image
  return (
    <>
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Input Loker</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Start Single Product */}
              <div className="single-product">
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
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <div className="author-box-name">
                        <div className="form-group">
                          <div className="form-row">
                            <div className="form-group col-12">
                              <label>Nama Instansi</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Nama Instansi atau Perusahaan"
                                // value={nameProduct}
                                // onChange={(e) => setNameProduct(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-12">
                              <label>Persyaratan</label>
                              <textarea
                                class="form-control"
                                // value={description}
                                // onChange={(e) => setDescription(e.target.value)}
                                placeholder="Masukan Persyaratan Loker"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 mt-3">
                        <div className="row float-right">
                          <button className="btn btn-success">
                            <i className="fas fa-plus fa-fw"></i> Tambah
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
