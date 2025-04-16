<Desktop>
<div className='portfolio'>
  <section>
    <h2 className="text-center fw-bold "> <br />
      Our Latest Projects
    </h2>
    <div className="col-lg-12 d-flex col-md-7 col-sm-7 my-2" >
      <div className="portfolio-buttons mx-auto" >
        <button className="mx-2 " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
        <button className="mx-2 " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
        <button className="mx-2 " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
        <button className="mx-2 " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
      </div>
    </div><br />
    <div className="portfolio-list">
      {filteredPortfolio.map((item, index) => (
        <div key={index} className="portfolio-item">

          <div className="image-gallery mx-auto">
            {Array.isArray(item.images) ? (
              <div class="row" style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center"
              }} bis_skin_checked="1">
                {item.images.map((image, i) => (
                  <div key={i} className="col-lg-4">

                    <section class="portfoliowrp">
                      {/* <div class="container-fluid" bis_skin_checked="1"> */}
                      <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                        <div class="row" bis_skin_checked="1">
                          <div class="col-md-12" bis_skin_checked="1">
                            <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                              <div class="row" bis_skin_checked="1">
                                <div class="col-md-12" bis_skin_checked="1">
                                  <div class="port-box" bis_skin_checked="1">

                                    <ul className='d-flex'>

                                      <li class="hk_web_height lazy tabs-web-dsgn"
                                        data-src="/new1.webp" alt="t-1"
                                        data-was-processed="true"
                                        style={{ backgroundImage: `url(${image})`, }}></li>

                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </section>
                  </div>


                ))}
              </div>
            ) : (
              <div className="box1">
                <img className="port-box" src={item.images} alt={item.title} />
              </div>
            )}
          </div>
          <br />
          <p className='description'>{item.description}</p>
        </div>
      ))}

    </div>
  </section >

</div >
</Desktop>
<Mobile>
<div className='portfolio'>
  <section>
    <h2 className="text-center fw-bold "> <br />
      Our Latest Projects
    </h2>
    <div className="col-lg-12 d-flex col-md-7 col-sm-7 my-2" >
      <div className="portfolio-buttons mx-auto" style={{
        display: " flex",
        flexWrap: "wrap"
      }}>
        <button className="mx-auto " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
        <button className="mx-auto " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
        <button className="mx-auto " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
        <button className="mx-auto " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
      </div>
    </div><br />
    <div className="portfolio-list">
      {filteredPortfolio.map((item, index) => (
        <div key={index} className="portfolio-item">

          <div className="image-gallery mx-auto">
            {Array.isArray(item.images) ? (
              <div class="row" style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center"
              }} bis_skin_checked="1">
                {item.images.map((image, i) => (
                  <div key={i} className="col-lg-4">

                    <section class="portfoliowrp">
                      {/* <div class="container-fluid" bis_skin_checked="1"> */}
                      <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                        <div class="row" bis_skin_checked="1">
                          <div class="col-md-12" bis_skin_checked="1">
                            <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                              <div class="row" bis_skin_checked="1">
                                <div class="col-md-12" bis_skin_checked="1">
                                  <div class="port-box" bis_skin_checked="1">

                                    <ul className='d-flex'>

                                      <li class="hk_web_height lazy tabs-web-dsgn"
                                        data-src="/new1.webp" alt="t-1"
                                        data-was-processed="true"
                                        style={{ backgroundImage: `url(${image})`, }}></li>

                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </section>
                  </div>


                ))}
              </div>
            ) : (
              <div className="box1">
                <img className="port-box" src={item.images} alt={item.title} />
              </div>
            )}
          </div>
          <br />
          <p className='description'>{item.description}</p>
        </div>
      ))}

    </div>
  </section >

</div >
</Mobile>