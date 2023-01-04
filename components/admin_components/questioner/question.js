export default function Question() {
  return (
    <div className="content">
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title text-primary text-bold">Form Kuisioner</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body" style={{ display: 'block' }}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                {/* <div className="card-title text-bold">Kuisiner Wajib</div> */}
                <table className="table table-striped table-borderless">
                  <tbody>
                    <tr>
                      <td><div style={{ borderRadius: '5px', height: '8px', width: '30px', backgroundColor: '#007bff', display: "inline-block" }}></div></td>
                      <td colSpan={4} className="text-bold"> Profile Alumni</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">NIM</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Nama Lengkap</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Prodi</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Tahun Lulus</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">No. Telepon/HP</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Email</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <input type="text" className="form-control form-control-sm " placeholder="..." disabled />
                      </td>
                    </tr>
                    <tr>
                      <td><div style={{ borderRadius: '5px', height: '8px', width: '30px', backgroundColor: '#007bff', display: "inline-block" }}></div></td>
                      <td colSpan={4} className="text-bold"> Kuisioner Wajib</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Berapa bulan waktu yang dihabiskan (sebelum dan sesudah kelulusan) untuk memperoleh pekerjaan pertama?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <div className="form-check form-check-inline mb-1">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Kira-kira</label>
                        </div>
                        <input type="number" className="form-control form-control-sm col-4 d-inline mr-1" placeholder="bulan" />
                        bulan sebelum lulus ujian
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Kira-kira</label>
                        </div>
                        <input type="number" className="form-control form-control-sm col-4 d-inline mr-1" placeholder="bulan" />
                        bulan sesudah lulus ujian
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Sebutkan sumberdana dalam pembiayaan kuliah?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Biaya Sendiri / Keluarga</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Beasiswa ADIK</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Beasiswa BIDIKMISI</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Beasiswa PPA</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Beasiswa AFIRMASI</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Beasiswa Perusahaan/Swasta</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Lainnya, tuliskan:</label>
                        </div>
                        <br />
                        <input type="text" className="form-control form-control-sm " placeholder="..." />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Apakah anda bekerja saat ini (termasuk kerja sambilan dan wirausaha)?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1">Iya</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1">Tidak</label>
                        </div>
                        <br />
                        <input type="text" className="form-control form-control-sm " placeholder="..." />
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Seberapa erat hubungan antara bidang studi dengan pekerjaan anda?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Sangat Erat</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Erat</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Cukup Erat</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Kurang Erat</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" htmlFor="inlineRadio1">Tidak Sama Sekali</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Tingkat pendidikan apa yang paling tepat/sesuai untuk pekerjaan anda saat ini?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" >Setingkat Lebih Tinggi</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" >Tingkat yang Sama</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" >Setingkat Lebih Rendah</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" />
                          <label className="form-check-label mr-1" >Tidak Perlu Pendidikan Tinggi</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Kira-kira berapa pendapatan anda setiap bulannya?</td>
                      <td className="">:</td>
                      <td className="w-50">
                        Rp.
                        <input type="number" className="form-control col-8 form-control-sm d-inline" />
                      </td>
                    </tr>
                    {/* <tr>
                      <td><div style={{ borderRadius: '5px', height: '8px', width: '30px', backgroundColor: '#007bff', display: "inline-block" }}></div></td>
                      <td colSpan={4} className="text-bold">Kuisioner Opsional</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Menurut anda seberapa besar penekanan pada metode pembelajaran di bawah ini dilaksanakan di program studi anda?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Kapan anda mulai mencari pekerjaan? Mohon pekerjaan sambilan tidak dimasukkan</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Bagaimana anda mencari pekerjaan tersebut? Jawaban bisa lebih dari satu</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Berapa perusahaan/instansi/institusi yang sudah anda lamar (lewat surat atau e-mail) sebelum anda memeroleh pekerjaan pertama?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Berapa banyak perusahaan/instansi/institusi yang merespons lamaran anda?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Berapa banyak perusahaan/instansi/institusi yang mengundang anda untuk wawancara?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Bagaimana anda menggambarkan situasi anda saat ini? Jawaban bisa lebih dari satu</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Apakah anda aktif mencari pekerjaan dalam 4 minggu terakhir?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Apa jenis perusahaan/instansi/institusi tempat anda bekerja sekarang?</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="w-50">Jika menurut anda pekerjaan anda saat ini tidak sesuai dengan pendidikan anda, mengapa anda mengambilnya? Jawaban bisa lebih dari satu</td>
                      <td className="">:</td>
                      <td className="w-50">jawaban</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer d-flex justify-content-center" style={{ display: 'block' }}>
          <button className="btn btn-primary">Selanjutnya <i className="fas fa-arrow-right"></i></button>
        </div>
      </div>

    </div>
  )
}