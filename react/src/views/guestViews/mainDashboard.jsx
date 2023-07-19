// import { useState } from "react";
// import Spreadsheet from "react-spreadsheet";
import CardMain from "../../components/core/card";
function MainDashboard() {
  // const [data, setData] = useState([
  //   [{ value: "Vanilla" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }],
  // ]);
  var count = 10;
  return (
    <div>
      {/* <CardMain title={dataTable.name}
              countData={dataTable.countData}/>
      {dataTable.map((number)=>{
            console.log(<CardMain
              title={number.name}
              countData={number.countData} />);
        })
      } */}
      <div>
        <CardMain
          title="Lịch Điện Nước"
          countNhan={count}
          countChuaPhan={count + 1}
          countDaPhan={count = count + 1}
          countHuy={count = count + 1}
        />

        <CardMain
          title="Lịch Điện lạnh"
          countNhan={count}
          countChuaPhan={count + 1}
          countDaPhan={count = count + 1}
          countHuy={count = count + 1}
        />
        <CardMain
          title="Lịch Đồ Gỗ"
          countNhan={count}
          countChuaPhan={count + 1}
          countDaPhan={count = count + 1}
          countHuy={count = count + 1}
        />
        <CardMain
          title="Lịch Xây Dựng"
          countNhan={count}
          countChuaPhan={count + 1}
          countDaPhan={count = count + 1}
          countHuy={count = count + 1}
        />
      </div>
    </div>
  );
}
export default MainDashboard
