import React, { useState } from "react"
import "./carousel.css"
import { Carousel, Modal } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const contentStyle = {
  // height: '500px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
}

const Searchbutton = (
  { onClick } // Receive onClick prop
) => (
  <button className="btn-text2" onClick={onClick}>
    Search Tyre By Size
  </button>
)

function Slideshow() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Carousel autoplay>
        <div className="background-image">
          <h3 style={contentStyle}></h3>
          <div className="text-container">
            <h1>Supertracker Assets now owned by Straightset</h1>
            <p>
              Straightset are national garage equipment experts with over 30
              years experience. Contact us for all your Supertracker needs on
              01909 480055.
            </p>
            {/* Pass showModal function as a prop */}
            <Searchbutton onClick={showModal} />
          </div>
        </div>
      </Carousel>
      <Modal
        bodyStyle={{ backgroundColor: "black" }}
        // wrapClassName="modalCss"
        footer={null}
        // title="SearchBar"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
      >
        <div className="search-bar">
          <p>
            Select your tyre size, click 'Search', and we'll show you a range of
            tyres suitable for your vehicle.
          </p>
          <div className="row">
            <div className="drop-down">
              <label class="control-label">Width</label>
              <select id="TyresSec" rel="sec" class="form-control">
                <option value="105"></option>
                <option value="115"></option>
                <option value="125"></option>
                <option value="135"></option>
                <option value="145"></option>
              </select>
            </div>
            <div className="drop-down">
              <label class="control-label">Ratio</label>
              <select id="TyresSec" rel="sec" class="form-control">
                <option value="105"></option>
                <option value="115"></option>
                <option value="125"></option>
                <option value="135"></option>
                <option value="145"></option>
              </select>
            </div>
            <div className="drop-down">
              <label class="control-label">Rim</label>
              <select id="TyresSec" rel="sec" class="form-control">
                <option value="105"></option>
                <option value="115"></option>
                <option value="125"></option>
                <option value="135"></option>
                <option value="145"></option>
              </select>
            </div>
            <div className="drop-down">
              <label class="control-label">Speed</label>
              <select id="TyresSec" rel="sec" class="form-control">
                <option value="105"></option>
                <option value="115"></option>
                <option value="125"></option>
                <option value="135"></option>
                <option value="145"></option>
              </select>
            </div>
          </div>
          <div className="btn">
            <button type="button" className="btn-text">
              SEARCH
              <span class="search-icon">
                <SearchOutlined />
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Slideshow
