import React from 'react';
import Ghe from '../../components/Ghe';
import {useSelector} from 'react-redux';
import {GheTr} from '../../components/GheTr';

const DatVe = () => {
    const {danhSachGhe, danhSachGheDangDat} = useSelector(
        (root) => root.datVeState
    );
    const tongTien = danhSachGheDangDat.reduce((sum, item) => {
        return sum + item.gia;
    }, 0);

    return (
        <PageWrapper>
            <DatGheWrapper>
                {danhSachGhe.map((item) => (
                    <Ghe item={item} key={item.soGhe} />
                ))}
            </DatGheWrapper>
            <DanhSachGheWrapper tongTien={tongTien}>
                {danhSachGheDangDat.map((item, key) => (
                    <GheTr item={item} key={key} />
                ))}
            </DanhSachGheWrapper>
        </PageWrapper>
    );
};
export default DatVe;

const PageWrapper = ({children}) => (
    <div
        style={{backgroundImage: "url('images/bgmovie.jpg')"}}
        className='vh-100'>
        <div className='container py-5'>
            <div className='row'>{children}</div>
        </div>
    </div>
);

const DatGheWrapper = (props) => (
    <div className='col-8'>
        <h2 className='fw-bold mb-3 text-white'>Đặt vé xem phim</h2>
        <div className='py-2 bg-warning text-center text-uppercase display-5 fw-bold'>
            Màn hình
        </div>
        <div className='row'>
            <div className='col-1 row mt-5 text-white text-center fw-bold'>
                <div className='py-2'>A</div>
                <div className='py-2'>B</div>
                <div className='py-2'>C</div>
                <div className='py-2'>D</div>
                <div className='py-2'>E</div>
                <div className='py-2'>F</div>
                <div className='py-2'>G</div>
                <div className='py-2'>H</div>
                <div className='py-2'>I</div>
                <div className='py-2'>J</div>
            </div>
            <div className='col-11 row m-0 text-white text-center' style={{flex: 'auto'}}>
                <div className='col-1 d-flex items-center py-2 fw-bold'>
                    1
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    2
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    3
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    4
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    5
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    6
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    7
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    8
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    9
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    10
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    11
                </div>
                <div className='col-1 d-flex items-center py-2'>
                    12
                </div>
                {props.children}
            </div>
        </div>
    </div>
);

const DanhSachGheWrapper = ({children, tongTien}) => (
    <div className='col-4'>
        <h2 className='fw-bold mb-3 text-white'>Danh sách ghế đã chọn</h2>
        <div className='d-flex flex-column gap-2 mb-5'>
            <div>
                <button className='btn btn-warning p-2 rounded-0'></button>{' '}
                <label className='text-white fw-bold'>Ghế đã đặt</label>
            </div>
            <div>
                <button className='btn btn-success p-2 rounded-0'></button>{' '}
                <label className='text-white fw-bold'>Ghế đang đặt</label>
            </div>
            <div>
                <button className='btn p-2 btn-secondary rounded-0'></button>{' '}
                <label className='text-white fw-bold'>Ghế trống</label>
            </div>
        </div>

        <table className='table bg-light'>
            <thead>
                <tr>
                    <th scope='col'>Số ghế</th>
                    <th scope='col'>Giá</th>
                    <th scope='col'>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {children}
                <tr>
                    <td
                        colSpan='3'
                        className='bg-secondary text-white text-end'>
                        <label htmlFor=''>Tổng tiền : {tongTien} VND</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
