import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import Layout from '../components/Layout';
import testimony from '../assets/images/edward-testimony.png';
import SubmitButton from '../components/SubmitButton';
import { connect, useSelector } from 'react-redux';
import { getVehicles } from '../redux/actions/vehicles';

export const Homepage=({getVehicles})=> {
  const {vehicles: vhc} = useSelector(state => state)
  // const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getVehicles(4, null, 'totalRent+DESC');
  }, [getVehicles]);

  // const getVehicles = async () => {
  //   const { data } = await axios.get(`${REACT_APP_BACKEND_URL}popular?sortBy=totalRent+DESC`);
  //   setVehicles(data.result);
  // };
  const goToDetail = (id) => {
    navigate(`/vehicle/${id}`);
  };
  const handleSearch = async (event) => {
    event.preventDefault();
    const searchVehicle = event.target.elements.name.value;
    navigate(`/vehicles?name=${searchVehicle}`, { replace: true });
  };
  return (
    <Layout>
      <div className="search-section">
        <div className="search-background py-5">
          <div className="container">
            <h1 className="py-5">Explore and Travel</h1>
            <form onSubmit={handleSearch} className="fs-5" style={{ width: '100%' }}>
              <h2 className="fs-4 p-0 mb-5">Vehicle Finder</h2>
              <div className="line mb-5" />
              <input type="text" name="name" placeholder="Type the vehicle (ex. motorbike)" className="col-12" />
              <div className="location-date col-12 d-flex flex-column flex-md-row p-0">
                <input type="text" name="location" placeholder="Location" />
                <div className="form-space" />
                <input type="date" />
              </div>
              <SubmitButton>Search</SubmitButton>
            </form>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="popular-section py-5">
          <div className="heading-section d-flex align-items-center my-3" style={{ width: '100%' }}>
            <h1 style={{ width: '50%' }}>Popular in town</h1>
            <div className="other-vehicles text-end" style={{ width: '50%' }}>
              <Link to="/popular-in-town" style={{ color: '#1572A1' }}>
                View all
<FaChevronRight className="ms-3" />
              </Link>
            </div>
          </div>
          <div className="row vehicles">
            {vhc.vehicles.map((data, idx) => (
              <div key={data.id} onClick={() => goToDetail(data.id)} className="col-12 col-md-6 col-lg-3 popular-vehicles position-relative py-3" style={{ cursor: 'pointer' }}>
                <img className="img-fluid" src={data.image} alt={data.name} />
                <div className="location position-absolute bottom-0 bg-white p-2">
                  <h6 className="m-0">{data.name}</h6>
                  <p className="m-0">{data.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimony-section py-5">
          <h2 className="fw-bold">Testimonials</h2>
          <div className="user-testimony d-flex flex-column-reverse flex-md-row justify-content-center align-items-center mx-auto p-3">
            <div className="message p-2">
              <div className="star text-center text-md-start">
                <AiFillStar style={{ color: 'ffc40c' }} />
                <AiFillStar style={{ color: 'ffc40c' }} />
                <AiFillStar style={{ color: 'ffc40c' }} />
                <AiFillStar style={{ color: 'ffc40c' }} />
                <AiFillStar style={{ color: 'ffc40c' }} />
              </div>
              <div className="msg">
                <p className="text-center text-md-start fs-5 fw-normal">”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
                <h6 className="text-center text-md-start fw-bold">Edward Newgate</h6>
                <p className="text-center text-md-start fs-6">Founder Circle</p>
              </div>
            </div>
            <div className="user">
              <img className="img-fluid mx-auto d-block" src={testimony} alt="user" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
const mapStateToProps = state => ({vehicles: state.vehicles})
const mapDispatchToProps = {getVehicles}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
