import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './type';
import { createMessage } from './message';

// GET LEADS
export const getLeads = () => dispatch => {
    axios
        .get("/api/leads")
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE LEAD
export const deleteLead = id => dispatch => {
    axios
        .delete(`/api/leads/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteLead: "Lead Deleted" }))
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addLead = lead => dispatch => {
    axios
        .post("/api/leads", lead)
        .then(res => {
            dispatch(createMessage({ addLead: "Lead Added" }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err => {
            // console.log(err.response.data)
            const errors = {
                msg: err.response.data.errors,
                status: err.response.data.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};