import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import styles from "./exportToPdf.module.scss";

interface Item {
  name: string;
  price: number;
}

interface ExportToPDFProps {
  items: {
    left: Item[];
    right: Item[];
  };
}

const ExportToPDF: React.FC<ExportToPDFProps> = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    const input = pdfRef.current;
    if (input) {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("services.pdf");
    }
  };

  return (
    <div>
      <button onClick={handleExportPDF} style={{ marginTop: 20 }}>
        Export PDF
      </button>
      <div ref={pdfRef} className={styles.paper}>
        <img style={{ width: "100%" }} src="header.jpg" alt="Placeholder" />
        <div className={styles.header}>
          BẢN YÊU CẦU BẢO HIỂM SINH MẠNG CÁ NHÂN
        </div>
        <div className={styles.section}>
          <table>
            <tr className={styles.header}>
              <th className={styles.headerText}>
                Sau khi đọc và hiểu Quy tắc Sinh mạng cá nhân của Tổng Công ty
                Cổ phần bảo hiểm Toàn Cầu (GIC), Tôi/Chúng tôi đề nghị Đại lý
                bảo hiểm là Công ty TN: HH Axinan Việt Nam cung cấp thông tin
                cho GIC để GIC bảo hiểm cho người được bảo hiểm theo Quy tắc
                trên, trên cơ sở những thông tin và yêu cầu bảo hiểm sau{" "}
              </th>
            </tr>
            <tr>
              <th className={styles.title}>I. THÔNG TIN BÊN MUA BẢO HIỂM</th>
            </tr>
            <tr className={styles.first}>
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <div className={styles.item}>
                    <div>Họ tên: </div>
                    <div>XXXXXXXXXXXXX </div>
                  </div>
                  <div className={styles.item}>
                    <div>Số CMND/CCCD: </div>
                    <div>XXXXXXXXXXXXXXXXX</div>
                  </div>
                  <div className={styles.item}>
                    <div>Email: </div>
                    <div>XXXXXXXXXXXXXXXXX</div>
                  </div>
                  <div className={styles.item}>
                    <div>Địa chỉ: </div>
                    <div>XXXXXXXXXXXXXXXXX</div>
                  </div>
                </div>
                {/* Right */}
                <div className={styles.right}>
                  <div className={styles.item}>
                    <div>Ngày sinh: </div>
                    <div>XX/XX/XXXX</div>
                  </div>
                  <div className={styles.item}>
                    <div>Giới tính: </div>
                    <div>XXXXXXXXXXXXXXXXX</div>
                  </div>
                  <div className={styles.item}>
                    <div>Điện thoại: </div>
                    <div>XXXXXXXXXXXXXXXXX</div>
                  </div>
                </div>
              </div>
            </tr>
            <tr>
              <th className={styles.title}>
                II. THÔNG TIN VỀ NGƯỜI ĐƯỢC BẢO HIỂM
              </th>
            </tr>
            <tr>
              <div
                style={{ textAlign: "left", fontWeight: "bold" }}
                className={styles.secondSection}
              >
                Người Được Bảo Hiểm Là Bên Mua Bảo Hiểm
              </div>
            </tr>
            <tr>
              <th className={styles.title}>III. NỘI DUNG YÊU CẦU BẢO HIỂM</th>
            </tr>
            <tr>
              <th className={styles.title}>
                1. Quyền lợi bảo hiểm vào số tiền bảo hiểm
              </th>
            </tr>
            <tr>
              <table>
                <tr>
                  <th style={{ width: "10%" }}>STT</th>
                  <th style={{ width: "50%" }}>QUYỀN LỢI BẢO HIỂM</th>
                  <th style={{ width: "20%" }}>SỐ TIỀN BẢO HIỂM (VNĐ)</th>
                  <th style={{ width: "30%" }}>THỜI GIAN CHỜ</th>
                </tr>
                <tr>
                  <th>1.1</th>
                  <th style={{ textAlign: "left" }}>
                    Người được bảo hiểm tử vong do tai nạn, ốm đau bệnh tật.
                  </th>
                  <th>XXXXXXX</th>
                  <th>365 ngày đối với bệnh đặc biệt.</th>
                </tr>
                <tr>
                  <th>1.2</th>
                  <th style={{ textAlign: "left" }}>
                    Người được bảo hiểm bị thương tật toàn bộ vĩnh viễn do tai
                    nạn, ốm đau bệnh tật.
                  </th>
                  <th>XXXXXXX</th>
                </tr>
              </table>
            </tr>
            <tr>
              <table>
                <tr>
                  <th style={{ textAlign: "left", width: "30%" }}>
                    2. Ngày yêu cầu bảo hiểm:
                  </th>
                  <th style={{ textAlign: "left" }}>XXXXXXXXX</th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    3. Ngày yêu cầu hiệu lực bảo hiểm:
                  </th>
                  <th style={{ textAlign: "left" }}>
                    XXXXXXXXX (Lưu ý: Nếu thanh toán phí sau ngày này thì ngày
                    hiệu lực bảo hiểm là ngày thanh toán phí)
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    4. Số tháng tham gia bảo hiểm:
                  </th>
                  <th style={{ textAlign: "left" }}>XXXXXXX tháng</th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>5. Phí bảo hiểm:</th>
                  <th style={{ textAlign: "left" }}>XXXXXXX đồng</th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    6. Điều kiện, điều khoản bảo hiểm:
                  </th>
                  <th style={{ textAlign: "left" }}>
                    Theo Quy tắc Sinh mạng cá nhân ban hành theo Quyết định số
                    217/06-GIC/BHCN ngày 01/11/2006 của Tổng Giám đốc Tổng Công
                    ty Cổ Phần Bảo hiểm Toàn Cầu (“Quy Tắc Bảo Hiểm”) và các sửa
                    đổi bổ sung quy định về quyền lợi bảo hiểm, điểm loại trừ
                    nêu trong bản “TÓM LƯỢC NỘI DUNG BẢO HIỂM” đính kèm. Trong
                    trường hợp có sự khác biệt giữa nội dung trong bản “TÓM LƯỢC
                    NỘI DUNG BẢO HIỂM”của Hợp Đồng Bảo Hiểm/Giấy Chứng Nhận Bảo
                    Hiểm với Quy Tắc Bảo Hiểm thì áp dụng nội dung trong bản
                    “TÓM LƯỢC NỘI DUNG BẢO HIỂM”.
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    7. Mở rộng bảo hiểm cho Người Thân
                  </th>
                  <th style={{ textAlign: "left" }}>
                    Khi Bên Mua Bảo Hiểm đồng thời là Chủ Thẻ Tín Dụng đáp ứng
                    đáp ứng các yêu cầu là Người Được Bảo Hiểm chính trong Hợp
                    Đồng Bảo Hiểm, Hợp Đồng Bảo Hiểm sẽ mở rộng bảo hiểm cho
                    Người Thân. Người Thân là vợ hoặc chồng hợp pháp của Người
                    Được Bảo Hiểm chính trong Hợp Đồng Bảo Hiểm tại thời điểm
                    xảy ra sự kiện bảo hiểm. Thời hạn bảo hiểm, Số Tiền Bảo
                    Hiểm, Phạm vi bảo hiểm và Quyền lợi bảo hiểm, Thời gian chờ,
                    Điều kiện điều khoản bảo hiểm áp dụng cho Người Thân được
                    quy định như bảo hiểm đối với Người Được Bảo Hiểm chính.
                  </th>
                </tr>
              </table>
            </tr>
            <tr>
              <th className={styles.title}>
                IV. THÔNG TIN NGƯỜI THỤ HƯỞNG QUYỀN LỢI BẢO HIỂM
              </th>
            </tr>
            <tr>
              <th className={styles.title}>
                - Người thụ hưởng thứ I: CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN
                MỘT THÀNH VIÊN LOTTE VIỆT NAM (LOTTE FINANCE), Địa chỉ: Tầng 4,
                tầng 12A Tòa tháp Tây, Tòa nhà LOTTE Center Hà Nội, số 54 Liễu
                Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội - được ưu
                tiên thanh toán trước tiền bảo hiểm bằng tổng khoản dư nợ thực
                tế (bao gồm nợ gốc, lãi và các chi phí khác như liệt kê trong
                Thỏa thuận hỗ trợ tài chính) toàn bộ Dư nợ Thẻ Tín Dụng cộng lãi
                phát sinh (nếu có) của Người Được Bảo Hiểm với LOTTE FINANCE tại
                thời điểm thanh toán nhưng không vượt quá Số Tiền Bảo Hiểm. -
                Người thụ hưởng thứ II: Người Được Bảo Hiểm hoặc Người thừa kế
                hợp pháp - cho Số Tiền Bảo Hiểm còn lại sau khi trừ đi phần đã
                thanh toán cho Người thụ hưởng thứ I (nếu có). Trong mọi trường
                hợp, tổng số tiền chi trả không vượt quá Số Tiền Bảo Hiểm mà
                Người Được Bảo Hiểm đăng ký tham gia.
              </th>
            </tr>
            <tr>
              <th className={styles.title}>V. THANH TOÁN PHÍ BẢO HIỂM</th>
            </tr>
            <tr>
              <th className={styles.title}>
                Công ty Tài chính TNHH MTV Lotte Việt Nam giải ngân thanh toán
                Phí bảo hiểm từ tiền vay của Bên Mua Bảo Hiểm theo Hợp đồng tín
                dụng, cho GIC thông qua Đại lý bảo hiểm là Công ty TNHH Axinan
                Việt Nam. Phí bảo hiểm được bên mua bảo hiểm thanh toán cho GIC
                thông qua Đại lý bảo hiểm là Công ty TNHH Axinan Việt Nam một
                lần cho toàn bộ thời hạn bảo hiểm. Phí bảo hiểm được bên mua bảo
                hiểm thanh toán cho GIC thông qua Đại lý bảo hiểm là Công ty
                TNHH Axinan Việt Nam một lần cho toàn bộ thời hạn bảo hiểm.
              </th>
            </tr>
            <tr>
              <th className={styles.title}>
                VI. BẢNG CÂU HỎI VỀ THÔNG TIN SỨC KHỎE NGƯỜI ĐƯỢC BẢO HIỂM
              </th>
            </tr>
            <tr>
              <table>
                <tr>
                  <th style={{ textAlign: "left", width: "90%" }}>
                    1. Ông/Bà đã từng mắc bệnh bẩm sinh, khuyết tật hay thương
                    tật/ tàn phế, phong, thần kinh hoặc tâm thần nào không?
                  </th>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>có</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>không</div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    2. Trong vòng 3 năm qua, Ông/Bà phải điều trị, nằm viện hay
                    phẫu thuật trong một bệnh viện, viện điều dưỡng, phòng khám
                    hoặc các tổ chức y tế khác hay không? hoặc ở trong tình
                    trạng cần phải điều trị liên tục trong bệnh viện trong vòng
                    12 tháng?
                  </th>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>có</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>không</div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    3. Trong vòng 3 năm qua, Ông/Bà đã từng bị mắc, có dấu hiệu
                    hoặc điều trị một hay nhiều trong các chứng bệnh sau: bệnh
                    lao, tiểu đường, phổi, nhồi máu cơ tim, suy tim, tai biến
                    mạch máu não và/ hoặc bệnh liên quan đến tim mạch, chấn
                    thương sọ não, suy chức năng gan, xơ gan, suy hô hấp và lao
                    phổi, suy thận, tiều đường tuyp 1, tuyp 2 đã có biến chứng
                    hoặc giai đoạn phải sử dụng thuốc tiêm điều trị, suy tụy,
                    khối u các loại ung thư, HIV hoặc các bệnh khác liên tục
                    trên 2 tuần?
                  </th>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>có</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>không</div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    4. Ông/Bà đã, đang tham gia hoặc dự định tham gia vào những
                    hoạt động thể thao nguy hiểm (đua mô tô, nhảy dù...) nào hay
                    không?
                  </th>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>có</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>không</div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    5. Ông/Bà đã bao giờ bị một công ty bảo hiểm từ chối bảo
                    hiểm hoặc từ chối tái tục hợp đồng bảo hiểm sức khỏe tương
                    tự?
                  </th>
                  <th style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>có</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox"></input>
                        <div>không</div>
                      </div>
                    </div>
                  </th>
                </tr>
              </table>
            </tr>
            <tr>
              <th className={styles.title}>
                VI. BẢNG CÂU HỎI VỀ THÔNG TIN SỨC KHỎE NGƯỜI ĐƯỢC BẢO HIỂM
              </th>
            </tr>
            <tr>
              <th style={{ textAlign: "left" }}>
                <div>
                  <p>
                    Người Được Bảo Hiểm/Bên Mua Bảo Hiểm và/hoặc Người được ủy
                    quyền hợp pháp của Người Được Bảo Hiểm xác nhận/đồng ý rằng:
                    <br />- Các thông tin cung cấp là trung thực, đầy đủ, chính
                    xác và hoàn toàn chịu trách nhiệm về các thông tin đã khai
                    báo này. <br />- Người Được Bảo Hiểm/Bên Mua Bảo Hiểm đã
                    được cung cấp Quy Tắc Bảo Hiểm
                    (https://bit.ly/BH_sinh_mang_ca_nhan), được giải thích rõ
                    ràng, đầy đủ về phạm vi bảo hiểm, quyền lợi sản phẩm bảo
                    hiểm, điều khoản loại trừ bảo hiểm và các điều khoản liên
                    quan khác trong Quy Tắc Bảo Hiểm, nhận thức được các đặc thù
                    của sản phẩm đã lựa chọn. <br />- Ủy quyền cho Đại diện của
                    GIC trong việc thu thập các chứng từ y tế nơi mà Người Được
                    Bảo Hiểm đã từng điều trị, khám chữa bệnh để có đầy đủ cơ sơ
                    giải quyết quyền lợi bảo hiểm. <br />- Tôi/Chúng tôi tham
                    gia bảo hiểm trên cơ sở tự nguyện, không bị ép buộc. <br />-
                    GIC được sử dụng các dữ liệu cá nhân mà Tôi/Chúng tôi cung
                    cấp trong quá trình tham gia bảo hiểm được kê khai trong
                    Giấy/Bản Yêu Cầu Bảo Hiểm, danh sách tham gia bảo hiểm (bao
                    gồm bản kê khai thông tin sức khỏe người được bảo hiểm),
                    Giấy yêu cầu trả tiền bảo hiểm cùng các tài liệu đính kèm
                    (nếu có), để cấp Giấy Chứng Nhận Bảo Hiểm/Hợp Đồng Bảo Hiểm,
                    chi trả tiền bảo hiểm, lưu trữ tại GIC và/hoặc gửi các bên
                    thứ ba có liên quan đến việc xem xét chi trả bảo hiểm.{" "}
                    <br />- Tôi/Chúng tôi đồng ý tham gia bảo hiểm do GIC hoặc
                    thông qua thông qua Đại lý bảo hiểm là Công ty TNHH Axinan
                    Việt Nam cung cấp sản phẩm bảo hiểm trên môi trường mạng
                    theo chính sách của GIC và theo quy định pháp luật.
                  </p>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div style={{ display: "absolute" }}>
        <div>Ngày.............. Tháng............... Năm...............</div>
        <div>BÊN MUA BẢO HIỂM</div>
        <div>(Ký & Ghi rõ họ tên)</div>
      </div>
    </div>
  );
};

export default ExportToPDF;
