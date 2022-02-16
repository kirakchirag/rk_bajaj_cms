import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTicket } from '../features/ticket/ticketSlice';
import { Link } from 'react-router-dom';

const CreateTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const [email] = useState(user.email);
  const [name] = useState(user.name);
  const [product, setProduct] = useState('Pulsar');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const ticketData = {
      email,
      name,
      product,
      description,
    };
    dispatch(createTicket(ticketData));
  };

  return (
    <section>
      <div className="container p-5">
        <h2 className="text-center">
          <i className="fa-solid fa-ticket"></i> Create Ticket
        </h2>

        <form onSubmit={onSubmitHandle}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name </label>
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputName"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputState">Product</label>
            <select
              onChange={(e) => setProduct(e.target.value)}
              id="inputState"
              className="form-control"
              defaultValue={'Pulsar'}
            >
              <option value={'Pulsar'}>Pulsar</option>
              <option value={'Platina'}>Platina</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateTicket;
