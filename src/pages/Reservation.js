import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { getData } from '../helpers/http';
import Layout from '../components/Layout';
import { connect, useDispatch, useSelector } from 'react-redux';
import { makeReservation } from '../redux/actions/reservation';

export const Reservation = (props)=> {
  const {counter} = useSelector(state=>state)
  const auth = useSelector(state=>state.auth)
  const reservation = useSelector(state => state.reservation)
  const token = window.localStorage.getItem('token')
  const [vehicles, setVehicles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {REACT_APP_BACKEND_URL} = process.env
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
    getVehicles(id);
  }, []);

  const getVehicles = async (id) => {
    try {
      const { data } = await getData(`${REACT_APP_BACKEND_URL}vehicles/${id}`, props.history);
      setVehicles(data.result);
    } catch (err) {
      console.log(err.message);
    }
  };
  const goBack = () => {
    window.history.back();
  };
  const onReservation = (e)=>{
    e.preventDefault()
    const vehicle_id = id
    const sum = counter.num
    console.log(typeof(vehicle_id), typeof(sum))
    const rent_date = e.target.elements['rent_date'].value
    const return_date = e.target.elements['return_date'].value
    const data = {vehicle_id, sum, rent_date, return_date}
    console.log(data)
    dispatch(makeReservation(data, token))
    console.log(reservation.isLoading, reservation.isError)
    if(!reservation.isLoading && !reservation.isError){
      navigate(`/payment/${id}`)
    }

  }
  return (
    <Layout>
      <main className="container my-5">
        <div className="back-arrow" onClick={goBack}>
          <div to="/" className="d-flex my-5" style={{ color: 'black' }}>
            <FaChevronLeft className="fs-3 me-5" style={{ height: '80px' }} />
            <p className="fs-3 m-0" style={{ lineHeight: '80px' }}>Reservation</p>
          </div>
        </div>
        {reservation.isError && reservation.message && <div className='alert alert-danger mb-5'>{reservation.message}</div>}
        <div className="detail-section row">
          <img src={vehicles?.image} alt={vehicles?.name} className="col-12 col-md-7" />
          <div className="vehicle-details col-12 col-md-5">
            <h2 className="fs-1 fw-bold mb-4">
              {vehicles?.name}
              {' '}
              {vehicles?.year}
            </h2>
            <h3 className="fs-3 fw-bold mb-4">{vehicles?.location}</h3>
            <div className="res-quantity p-2 my-3">
              <p>Qt: {counter.num} bikes</p>
              <p>No prepayment</p>
            </div>
            <div className="detail-checkout p-2">
              <p>
                {' '}
                1 bike: Rp.
                {vehicles?.cost}
              </p>
              <p>
                {' '}
                1 bike: Rp.
                {vehicles?.cost}
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onReservation} className="reservation-form my-4">
          <div className="d-flex flex-column flex-md-row">
            <h3>Reservation date :</h3>
            <input className="text-center ms-auto fs-5" type="date" name="rent_date" />
            <input className="text-center ms-auto fs-5" type="date" name="return_date" />
          </div>
          <div className="btn text-center my-3 fs-5">
            Total: Rp.
            {vehicles?.cost * counter.num} /day
          </div>
          <button type="submit" className="fs-5 fw-bold py-0">Go to payment</button>
        </form>
      </main>
    </Layout>
  );
}

const mapStateToProps = state=>({counter: state.counter, auth: state.auth})
const mapDispatchToProps = {makeReservation}
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
