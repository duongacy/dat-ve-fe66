const initialState = {
    danhSachGhe: [
        {soGhe: 'A1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'A11', gia: 0, daDat: true, dangDat: false},
        {soGhe: 'A12', gia: 0, daDat: true, dangDat: false},
        {soGhe: 'B1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'B12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'C12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'D12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'E12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'F12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'G12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'H12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I1', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I5', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'I12', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J1', gia: 75000, daDat: true, dangDat: false},
        {soGhe: 'J2', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J3', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J4', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J5', gia: 75000, daDat: true, dangDat: false},
        {soGhe: 'J6', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J7', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J8', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J9', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J10', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J11', gia: 75000, daDat: false, dangDat: false},
        {soGhe: 'J12', gia: 75000, daDat: false, dangDat: false},
    ],
    danhSachGheDangDat: [],
};

export const datVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHON_GHE':
            let ghe = state.danhSachGhe.find(
                (item) => item.soGhe === action.payload
            );
            ghe.dangDat = !ghe.dangDat;
            // Phan ra 2 TH
            // + TH 1: Ghe nay dang duoc dat thi xoa di
            if (
                state.danhSachGheDangDat.some(
                    (item) => item.soGhe === action.payload
                )
            ) {
                state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
                    (item) => item.soGhe !== action.payload
                );
            }

            // + TH 1: Ghe nay chua duoc dat thi them vao
            else {
                state.danhSachGheDangDat = [...state.danhSachGheDangDat, ghe];
                console.log('hihi');
            }
            break;
        default:
            break;
    }
    return {...state};
};
