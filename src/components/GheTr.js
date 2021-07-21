import React from 'react';
import {useDispatch} from 'react-redux';
import {chonGhe} from '../redux/actions/datVeAction';

export const GheTr = (props) => {
    const dispatch = useDispatch();
    const {item} = props;
    const huyGhe = () => {
        dispatch(chonGhe(item.soGhe));
    };
    return (
        <tr>
            <td>{item.soGhe}</td>
            <td>{item.gia} VND</td>
            <td>
                <button
                    className='btn btn-danger btn-sm rounded-0 w-100'
                    onClick={huyGhe}>
                    Hủy
                </button>
            </td>
        </tr>
    );
};
