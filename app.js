const CATEGORY_INFO = {
  alkali: { label: "Kim loại kiềm", color: "#dce9f3" },
  alkaline: { label: "Kim loại kiềm thổ", color: "#f5e5c4" },
  transition: { label: "Kim loại chuyển tiếp", color: "#f2d5d4" },
  post: { label: "Kim loại sau chuyển tiếp", color: "#d9e9d8" },
  metalloid: { label: "Á kim", color: "#e4dcef" },
  nonmetal: { label: "Phi kim", color: "#f4dddd" },
  halogen: { label: "Halogen", color: "#d3e9e5" },
  noble: { label: "Khí hiếm", color: "#f0d9e4" },
  lanthanoid: { label: "Họ Lantan", color: "#d5e9e4" },
  actinide: { label: "Họ Actini", color: "#f3dfca" }
};

const OXIDATION_STATES = {
  H: "-1, +1", He: "0", Li: "+1", Be: "+2", B: "-3, +3", C: "-4, +2, +4",
  N: "-3, +3, +5", O: "-2, -1", F: "-1", Ne: "0", Na: "+1", Mg: "+2",
  Al: "+3", Si: "-4, +2, +4", P: "-3, +3, +5", S: "-2, +4, +6",
  Cl: "-1, +1, +3, +5, +7", Ar: "0", K: "+1", Ca: "+2", Sc: "+3",
  Ti: "+2, +3, +4", V: "+2, +3, +4, +5", Cr: "+2, +3, +6",
  Mn: "+2, +3, +4, +7", Fe: "+2, +3", Co: "+2, +3", Ni: "+2, +3",
  Cu: "+1, +2", Zn: "+2", Ga: "+1, +3", Ge: "+2, +4", As: "-3, +3, +5",
  Se: "-2, +4, +6", Br: "-1, +1, +5, +7", Kr: "0, +2", Rb: "+1",
  Sr: "+2", Y: "+3", Zr: "+4", Nb: "+3, +5", Mo: "+4, +6",
  Tc: "+4, +7", Ru: "+3, +4, +8", Rh: "+3", Pd: "+2, +4",
  Ag: "+1", Cd: "+2", In: "+1, +3", Sn: "+2, +4", Sb: "-3, +3, +5",
  Te: "-2, +4, +6", I: "-1, +1, +5, +7", Xe: "0, +2, +4, +6, +8",
  Cs: "+1", Ba: "+2", La: "+3", Ce: "+3, +4", Pr: "+3, +4",
  Nd: "+3", Pm: "+3", Sm: "+2, +3", Eu: "+2, +3", Gd: "+3",
  Tb: "+3, +4", Dy: "+3", Ho: "+3", Er: "+3", Tm: "+2, +3",
  Yb: "+2, +3", Lu: "+3", Hf: "+4", Ta: "+5", W: "+4, +6",
  Re: "+4, +6, +7", Os: "+4, +8", Ir: "+3, +4", Pt: "+2, +4",
  Au: "+1, +3", Hg: "+1, +2", Tl: "+1, +3", Pb: "+2, +4",
  Bi: "+3, +5", Po: "-2, +2, +4, +6", At: "-1, +1, +5",
  Rn: "0", Fr: "+1", Ra: "+2", Ac: "+3", Th: "+4", Pa: "+4, +5",
  U: "+3, +4, +5, +6", Np: "+3, +4, +5, +6, +7", Pu: "+3, +4, +5, +6",
  Am: "+3, +4, +5, +6", Cm: "+3", Bk: "+3, +4", Cf: "+3",
  Es: "+3", Fm: "+3", Md: "+2, +3", No: "+2, +3", Lr: "+3",
  Rf: "+4", Db: "+5", Sg: "+6", Bh: "+7", Hs: "+8",
  Mt: "Chưa xác định thực nghiệm", Ds: "Chưa xác định thực nghiệm",
  Rg: "Chưa xác định thực nghiệm", Cn: "+2 (dự đoán)", Nh: "+1, +3 (dự đoán)",
  Fl: "+2, +4 (dự đoán)", Mc: "+1, +3 (dự đoán)", Lv: "+2, +4 (dự đoán)",
  Ts: "-1, +1, +3 (dự đoán)", Og: "Chưa xác định thực nghiệm"
};

const APPLICATIONS = {
  H: [["🚀", "Nhiên liệu tên lửa và pin nhiên liệu"], ["🏭", "Nguyên liệu sản xuất amoniac"], ["🔬", "Khí quyển bảo vệ trong một số quy trình"]],
  He: [["🧲", "Làm lạnh nam châm siêu dẫn trong máy MRI"], ["🎈", "Khí nâng cho bóng bay chuyên dụng"], ["🔎", "Phát hiện rò rỉ trong hệ thống kín"]],
  Li: [["🔋", "Pin sạc cho điện thoại và xe điện"], ["🛠️", "Mỡ bôi trơn chịu nhiệt"], ["🧪", "Một số hợp kim nhẹ"]],
  B: [["🧪", "Thủy tinh borosilicate chịu nhiệt"], ["🧼", "Một số chất tẩy rửa và phân bón"], ["🛡️", "Vật liệu hấp thụ neutron"]],
  C: [["✏️", "Than chì trong ruột bút chì và điện cực"], ["🏗️", "Thép và vật liệu sợi carbon"], ["💎", "Kim cương dùng trong cắt gọt"]],
  N: [["🌱", "Sản xuất phân đạm"], ["❄️", "Nitơ lỏng làm lạnh sâu"], ["📦", "Tạo môi trường trơ khi đóng gói"]],
  O: [["🫁", "Hỗ trợ hô hấp trong y tế"], ["🔥", "Luyện thép và các quy trình công nghiệp"], ["🧴", "Khử trùng nước bằng ozone"]],
  F: [["🦷", "Hợp chất fluoride trong chăm sóc răng"], ["🍳", "Lớp chống dính PTFE"], ["🧪", "Tổng hợp hóa chất chuyên dụng"]],
  Ne: [["💡", "Đèn quảng cáo phát sáng"], ["🔬", "Đèn chỉ thị và thiết bị quang học"]],
  Na: [["🧂", "Muối ăn và hóa chất công nghiệp"], ["💡", "Đèn hơi natri"], ["🧼", "Sản xuất xà phòng và giấy"]],
  Mg: [["✈️", "Hợp kim nhẹ cho phương tiện"], ["🎆", "Pháo sáng và pháo hoa"], ["🧱", "Vật liệu chịu lửa"]],
  Al: [["🥫", "Lon và bao bì nhẹ"], ["✈️", "Máy bay và phương tiện"], ["⚡", "Dây dẫn và truyền tải điện"]],
  Si: [["💻", "Vi mạch và pin mặt trời"], ["🪟", "Thủy tinh và vật liệu xây dựng"], ["🧴", "Silicone trong nhiều sản phẩm"]],
  P: [["🌱", "Phân bón phosphate"], ["🧬", "Thành phần của DNA và ATP"], ["🔥", "Diêm an toàn"]],
  S: [["🏭", "Sản xuất axit sulfuric"], ["🌱", "Phân bón và hóa chất nông nghiệp"], ["🛞", "Lưu hóa cao su"]],
  Cl: [["🚰", "Khử trùng nước"], ["🧪", "Sản xuất PVC và hóa chất"], ["🧺", "Chất tẩy rửa gia dụng"]],
  Ar: [["🛠️", "Khí bảo vệ khi hàn"], ["💡", "Bóng đèn và thiết bị chiếu sáng"], ["🔬", "Môi trường trơ trong phòng thí nghiệm"]],
  K: [["🌱", "Phân bón kali"], ["🧼", "Sản xuất xà phòng mềm"], ["🧪", "Hóa chất và thủy tinh đặc biệt"]],
  Ca: [["🏗️", "Xi măng, vôi và thạch cao"], ["🦴", "Hợp chất thiết yếu cho xương"], ["🧪", "Xử lý đất và nước"]],
  Ti: [["🦿", "Implant và dụng cụ y tế"], ["✈️", "Hợp kim hàng không"], ["🎨", "Titanium dioxide trong sơn và kem chống nắng"]],
  Cr: [["🏗️", "Thép không gỉ"], ["✨", "Mạ bề mặt chống ăn mòn"], ["🧪", "Hợp kim chịu nhiệt"]],
  Mn: [["🏗️", "Sản xuất thép"], ["🔋", "Một số loại pin"], ["🧪", "Hóa chất xử lý nước"]],
  Fe: [["🏗️", "Thép trong xây dựng"], ["🚗", "Máy móc và phương tiện"], ["🧬", "Vi lượng cần thiết cho cơ thể"]],
  Co: [["🔋", "Vật liệu điện cực pin"], ["🧲", "Nam châm và hợp kim chịu nhiệt"], ["🎨", "Sắc tố màu xanh"]],
  Ni: [["🍴", "Thép không gỉ và đồ dùng"], ["🔋", "Pin sạc"], ["🪙", "Mạ và hợp kim"]],
  Cu: [["⚡", "Dây điện và động cơ"], ["🚰", "Ống dẫn nước"], ["🪙", "Hợp kim đồng thau và đồng bronze"]],
  Zn: [["🛡️", "Mạ kẽm chống gỉ"], ["🔋", "Pin"], ["🧴", "Hợp chất trong kem chống nắng"]],
  Ga: [["💡", "LED và laser bán dẫn"], ["📡", "Thiết bị tần số cao"], ["🌡️", "Một số hợp kim nhiệt độ thấp"]],
  Ge: [["🌐", "Sợi quang học"], ["💻", "Bán dẫn và cảm biến"], ["🔭", "Thấu kính hồng ngoại"]],
  As: [["💻", "Một số bán dẫn chuyên dụng"], ["🔬", "Nghiên cứu vật liệu"], ["⚠️", "Ứng dụng bị hạn chế vì độc tính"]],
  Se: [["☀️", "Pin mặt trời và cảm biến quang"], ["🪟", "Khử màu thủy tinh"], ["🧪", "Một số hợp kim"]],
  Br: [["🧪", "Hóa chất xử lý nước"], ["📷", "Vật liệu ảnh truyền thống"], ["🏭", "Một số hợp chất chống cháy"]],
  Kr: [["💡", "Đèn flash và đèn chuyên dụng"], ["🔬", "Laser và nghiên cứu quang học"]],
  Sr: [["🎆", "Tạo sắc đỏ trong pháo hoa"], ["🧲", "Nam châm ferrite"], ["🧪", "Gốm kỹ thuật"]],
  Zr: [["⚛️", "Vỏ bọc nhiên liệu hạt nhân"], ["🦷", "Gốm và vật liệu nha khoa"], ["🏭", "Hợp kim chống ăn mòn"]],
  Nb: [["🏗️", "Hợp kim thép cường độ cao"], ["🧲", "Nam châm siêu dẫn"], ["🧪", "Thiết bị y tế MRI"]],
  Mo: [["🏭", "Thép hợp kim chịu nhiệt"], ["🛢️", "Chất xúc tác lọc dầu"], ["🧪", "Điện cực và chất bôi trơn"]],
  Ag: [["⚡", "Tiếp điểm và linh kiện điện tử"], ["📷", "Ảnh bạc truyền thống"], ["💍", "Trang sức và lớp phủ"]],
  Cd: [["🔋", "Pin nickel-cadmium trong ứng dụng đặc thù"], ["🎨", "Một số sắc tố công nghiệp"], ["⚠️", "Sử dụng bị hạn chế do độc tính"]],
  In: [["📱", "Lớp dẫn điện trong màn hình cảm ứng"], ["🔧", "Hợp kim hàn nhiệt độ thấp"], ["💡", "LED và bán dẫn"]],
  Sn: [["🥫", "Mạ thiếc cho thép bao bì"], ["🔧", "Hợp kim hàn"], ["🪟", "Một số lớp phủ kính"]],
  I: [["🧂", "Muối i-ốt"], ["🧴", "Chất sát khuẩn"], ["🏥", "Chất cản quang trong y tế"]],
  Xe: [["💡", "Đèn cường độ cao"], ["🏥", "Ứng dụng gây mê chuyên biệt"], ["🚀", "Động cơ đẩy ion trong không gian"]],
  Cs: [["⏱️", "Đồng hồ nguyên tử"], ["🛢️", "Dung dịch khoan chuyên dụng"], ["🔬", "Nghiên cứu vật lý"]],
  Ba: [["🩻", "Barium sulfate trong chụp X-quang"], ["🎆", "Pháo hoa màu xanh lục"], ["🧪", "Gốm và thủy tinh đặc biệt"]],
  La: [["🔭", "Thấu kính máy ảnh"], ["🔋", "Pin nickel-metal hydride"], ["🧪", "Chất xúc tác"]],
  Ce: [["🚗", "Bộ xúc tác khí thải"], ["🪟", "Đánh bóng kính"], ["🧪", "Hợp kim đánh lửa"]],
  Nd: [["🧲", "Nam châm vĩnh cửu mạnh"], ["🎧", "Loa và tai nghe"], ["🔬", "Laser"]],
  Eu: [["📺", "Phosphor đỏ trong màn hình"], ["💳", "Mực chống làm giả"], ["🔬", "Nghiên cứu quang học"]],
  Gd: [["🏥", "Chất đối quang MRI dạng hợp chất"], ["🧲", "Vật liệu từ tính"], ["⚛️", "Hấp thụ neutron"]],
  W: [["🛠️", "Mũi khoan và dụng cụ cắt"], ["💡", "Dây tóc bóng đèn kiểu cũ"], ["🏭", "Hợp kim chịu nhiệt"]],
  Pt: [["🚗", "Bộ chuyển đổi xúc tác"], ["🧪", "Xúc tác công nghiệp"], ["💍", "Trang sức"]],
  Au: [["💍", "Trang sức"], ["⚡", "Tiếp điểm điện tử chống ăn mòn"], ["🦷", "Nha khoa và y tế chuyên biệt"]],
  Hg: [["💡", "Đèn huỳnh quang (ứng dụng đang giảm)"], ["🔬", "Một số thiết bị đo đời cũ"], ["⚠️", "Sử dụng bị hạn chế vì độc tính"]],
  Pb: [["🔋", "Ắc quy chì-axit"], ["🛡️", "Che chắn bức xạ"], ["⚠️", "Độc tính cao, không dùng trong sơn/nhiên liệu dân dụng"]],
  U: [["⚛️", "Nhiên liệu trong một số lò phản ứng"], ["🔬", "Nghiên cứu địa chất và vật liệu"], ["⚠️", "Phóng xạ và độc tính hóa học"]],
  Am: [["🚨", "Nguồn ion hóa trong một số đầu báo khói"], ["🔬", "Nghiên cứu hạt nhân"]]
};

const NAME_ORIGINS = {
  H: "Tên do Antoine Lavoisier đặt, ghép từ tiếng Hy Lạp hydōr (nước) và gennan (tạo ra).",
  He: "Từ tiếng Hy Lạp hēlios, nghĩa là Mặt Trời; heli được nhận ra trong quang phổ Mặt Trời trước khi tìm thấy trên Trái Đất.",
  Li: "Từ tiếng Hy Lạp lithos, nghĩa là đá, vì được phát hiện trong khoáng vật.",
  C: "Từ tiếng Latin carbo, nghĩa là than.",
  N: "Tên nitrogen gắn với nguồn gốc tiếng Hy Lạp nitron và genes, nghĩa là tạo ra nitre.",
  O: "Từ tiếng Hy Lạp oxys (axit) và genes (tạo ra), theo cách hiểu lịch sử của Lavoisier.",
  Na: "Ký hiệu Na bắt nguồn từ tên Latin natrium; tên sodium có nguồn gốc từ soda.",
  K: "Ký hiệu K bắt nguồn từ kalium, tên Latin hóa của kali.",
  Fe: "Ký hiệu Fe bắt nguồn từ tên Latin ferrum.",
  Cu: "Ký hiệu Cu bắt nguồn từ tên Latin cuprum.",
  Ag: "Ký hiệu Ag bắt nguồn từ tên Latin argentum.",
  Au: "Ký hiệu Au bắt nguồn từ tên Latin aurum, nghĩa là vàng.",
  Pb: "Ký hiệu Pb bắt nguồn từ tên Latin plumbum.",
  U: "Được đặt theo tên hành tinh Uranus, vừa được phát hiện vào thời điểm đó.",
  Ne: "Từ tiếng Hy Lạp neos, nghĩa là mới.",
  P: "Từ tiếng Hy Lạp phosphoros, nghĩa là mang ánh sáng.",
  Cl: "Từ tiếng Hy Lạp chloros, nghĩa là xanh lục nhạt.",
  I: "Từ tiếng Hy Lạp ioeidēs, nghĩa là màu tím.",
  Ar: "Từ tiếng Hy Lạp argos, nghĩa là lười hoạt động, ám chỉ tính trơ."
};

const DISCOVERY_YEARS = {
  H: "1766", He: "1868", Li: "1817", Be: "1798", B: "1808", C: "Thời cổ đại",
  N: "1772", O: "1774", F: "1886", Ne: "1898", Na: "1807", Mg: "1755",
  Al: "1825", Si: "1824", P: "1669", S: "Thời cổ đại", Cl: "1774",
  Ar: "1894", K: "1807", Ca: "1808", Sc: "1879", Ti: "1791", V: "1801",
  Cr: "1797", Mn: "1774", Fe: "Thời cổ đại", Co: "1735", Ni: "1751",
  Cu: "Thời cổ đại", Zn: "1746", Ga: "1875", Ge: "1886", As: "Thời cổ đại",
  Se: "1817", Br: "1826", Kr: "1898", Rb: "1861", Sr: "1790", Y: "1794",
  Zr: "1789", Nb: "1801", Mo: "1778", Tc: "1937", Ru: "1844", Rh: "1803",
  Pd: "1803", Ag: "Thời cổ đại", Cd: "1817", In: "1863", Sn: "Thời cổ đại",
  Sb: "Thời cổ đại", Te: "1782", I: "1811", Xe: "1898", Cs: "1860",
  Ba: "1772", La: "1839", Ce: "1803", Pr: "1885", Nd: "1885", Pm: "1945",
  Sm: "1879", Eu: "1901", Gd: "1880", Tb: "1843", Dy: "1886", Ho: "1878",
  Er: "1842", Tm: "1879", Yb: "1878", Lu: "1907", Hf: "1923", Ta: "1802",
  W: "1783", Re: "1925", Os: "1803", Ir: "1803", Pt: "Thời cổ đại",
  Au: "Thời cổ đại", Hg: "Thời cổ đại", Tl: "1861", Pb: "Thời cổ đại",
  Bi: "Thời cổ đại", Po: "1898", At: "1940", Rn: "1900", Fr: "1939",
  Ra: "1898", Ac: "1899", Th: "1829", Pa: "1913", U: "1789", Np: "1940",
  Pu: "1940", Am: "1944", Cm: "1944", Bk: "1949", Cf: "1950", Es: "1952",
  Fm: "1952", Md: "1955", No: "1958", Lr: "1961", Rf: "1964", Db: "1968",
  Sg: "1974", Bh: "1981", Hs: "1984", Mt: "1982", Ds: "1994", Rg: "1994",
  Cn: "1996", Nh: "2003", Fl: "1998", Mc: "2003", Lv: "2000", Ts: "2010",
  Og: "2002"
};

const table = document.querySelector("#periodic-table");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const resultCount = document.querySelector("#result-count");
const dialog = document.querySelector("#detail-dialog");
const detailContent = document.querySelector("#detail-content");
const closeDialogButton = document.querySelector("#close-dialog");

let elements = [];
let currentElement = null;
let temperatureUnit = "C";

function categoryKey(element) {
  const category = (element.category || "").toLowerCase();
  if (category.includes("lanthanide")) return "lanthanoid";
  if (category.includes("actinide")) return "actinide";
  if (category.includes("alkali metal")) return "alkali";
  if (category.includes("alkaline earth")) return "alkaline";
  if (category.includes("transition metal")) return "transition";
  if (category.includes("post-transition")) return "post";
  if (category.includes("metalloid")) return "metalloid";
  if (category.includes("halogen")) return "halogen";
  if (category.includes("noble gas")) return "noble";
  if (category.includes("nonmetal")) return "nonmetal";
  if (element.number === 1) return "nonmetal";
  if (element.group === 1) return "alkali";
  if (element.group === 2) return "alkaline";
  if (element.group >= 3 && element.group <= 12) return "transition";
  if (element.group === 17) return "halogen";
  if (element.group === 18) return "noble";
  return "post";
}

function categoryLabel(element) {
  return CATEGORY_INFO[categoryKey(element)].label;
}

function formatMass(mass) {
  if (mass === null || mass === undefined || mass === "") return "—";
  const numericMass = Number(mass);
  return Number.isFinite(numericMass) ? numericMass.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") : String(mass);
}

function formatAtomicMass(element) {
  const mass = formatMass(element.atomic_mass);
  const hasMass = mass !== "—";
  const lacksStableIsotopes = element.number === 43 || element.number === 61 ||
    (element.number >= 84 && element.number <= 89) || element.number >= 93;
  if (!hasMass || !lacksStableIsotopes || mass.startsWith("[")) return mass;
  const numericMass = Number(element.atomic_mass);
  return Number.isFinite(numericMass) ? `[${Math.round(numericMass)}]` : mass;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function displayValue(value, unit = "") {
  if (value === null || value === undefined || value === "") return "Chưa có dữ liệu";
  return `${value}${unit}`;
}

function phaseLabel(phase) {
  return ({
    Gas: "Khí",
    Liquid: "Lỏng",
    Solid: "Rắn"
  })[phase] || "Chưa xác định";
}

function elementPosition(element) {
  if (element.number >= 57 && element.number <= 71) {
    return { column: element.xpos + 1, row: 9 };
  }
  if (element.number >= 89 && element.number <= 103) {
    return { column: element.xpos + 1, row: 10 };
  }
  return { column: element.group + 1, row: element.period + 1 };
}

function buildTable() {
  table.replaceChildren();

  for (let group = 1; group <= 18; group += 1) {
    const heading = document.createElement("span");
    heading.className = "group-number";
    heading.style.gridColumn = String(group + 1);
    heading.style.gridRow = "1";
    heading.textContent = String(group);
    heading.setAttribute("role", "columnheader");
    table.append(heading);
  }

  for (let period = 1; period <= 7; period += 1) {
    const heading = document.createElement("span");
    heading.className = "period-number";
    heading.style.gridColumn = "1";
    heading.style.gridRow = String(period + 1);
    heading.textContent = String(period);
    heading.setAttribute("aria-label", `Chu kỳ ${period}`);
    table.append(heading);
  }

  const key = document.createElement("section");
  key.className = "sample-key";
  key.style.gridColumn = "4 / span 10";
  key.style.gridRow = "3 / span 2";
  key.setAttribute("aria-label", "Chú giải cách đọc và màu sắc");
  key.innerHTML = `
    <div class="element sample-cell element--alkali" aria-hidden="true">
      <span class="atomic-number">3</span><span class="element-symbol">Li</span>
      <span class="element-name">Lithium</span><span class="atomic-mass">6.94</span>
    </div>
    <div class="sample-key-copy">
      <h2>Cách đọc một ô nguyên tố</h2>
      <p>Số trên cùng: số hiệu nguyên tử · Ký hiệu: tên viết tắt · Dòng dưới: tên nguyên tố · Cuối ô: nguyên tử khối trung bình.</p>
    </div>
    <div class="legend" aria-label="Chú giải màu sắc"></div>`;
  table.append(key);

  const legend = key.querySelector(".legend");
  Object.entries(CATEGORY_INFO).forEach(([keyName, info]) => {
    const item = document.createElement("span");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-swatch" style="--swatch:${info.color}"></span>${escapeHtml(info.label)}`;
    legend.append(item);
  });

  [
    { row: 9, className: "series-label--lanthanoid", title: "Lantan", range: "57–71" },
    { row: 10, className: "series-label--actinide", title: "Actini", range: "89–103" }
  ].forEach((series) => {
    const label = document.createElement("div");
    label.className = `series-label ${series.className}`;
    label.innerHTML = `${series.title}<span>${series.range}</span>`;
    table.append(label);
  });

  [6, 7].forEach((period) => {
    const marker = document.createElement("div");
    marker.className = "series-marker";
    marker.style.gridColumn = "4";
    marker.style.gridRow = String(period + 1);
    marker.textContent = "↘ Họ f";
    marker.setAttribute("aria-label", "Họ Lantan hoặc Actini được tách xuống hàng dưới");
    table.append(marker);
  });

  elements.forEach((element) => {
    const position = elementPosition(element);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `element element--${categoryKey(element)}`;
    button.dataset.number = String(element.number);
    button.dataset.name = element.name.toLowerCase();
    button.dataset.symbol = element.symbol.toLowerCase();
    button.dataset.category = categoryKey(element);
    button.style.gridColumn = String(position.column);
    button.style.gridRow = String(position.row);
    button.setAttribute("role", "gridcell");
    button.setAttribute("aria-label", `${element.number}, ${element.name}, ${element.symbol}, ${categoryLabel(element)}`);
    button.title = `${element.name} (${element.symbol}) · ${categoryLabel(element)}`;
    button.innerHTML = `
      <span class="atomic-number">${element.number}</span>
      <span class="element-symbol">${escapeHtml(element.symbol)}</span>
      <span class="element-name">${escapeHtml(element.name)}</span>
      <span class="atomic-mass">${escapeHtml(formatAtomicMass(element))}</span>`;
    button.addEventListener("click", () => openDetails(element));
    table.append(button);
  });

  populateCategoryFilter();
  applyFilters();
}

function populateCategoryFilter() {
  Object.entries(CATEGORY_INFO).forEach(([key, info]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = info.label;
    categoryFilter.append(option);
  });
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  let visibleCount = 0;

  table.querySelectorAll(".element[data-number]").forEach((cell) => {
    const matchesText = !query ||
      cell.dataset.name.includes(query) ||
      cell.dataset.symbol.includes(query) ||
      cell.dataset.number === query;
    const matchesCategory = category === "all" || cell.dataset.category === category;
    const matches = matchesText && matchesCategory;
    cell.classList.toggle("is-dimmed", !matches);
    cell.classList.toggle("is-match", Boolean(query) && matches);
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} / 118 nguyên tố`;
}

function formatTemperature(kelvin) {
  if (kelvin === null || kelvin === undefined) return "Chưa có dữ liệu";
  const temperature = temperatureUnit === "C" ? Number(kelvin) - 273.15 : Number(kelvin);
  const rounded = Math.round(temperature * 10) / 10;
  return `${rounded} ${temperatureUnit === "C" ? "°C" : "K"}`;
}

function detailCard(label, value) {
  return `<div class="data-card"><span class="data-label">${escapeHtml(label)}</span><strong class="data-value">${escapeHtml(value)}</strong></div>`;
}

function electronConfigurationCard(label, configuration) {
  const value = configuration
    ? escapeHtml(configuration).replace(/(\d+[spdf])(\d+)/gi, "$1<sup>$2</sup>")
    : "Chưa có dữ liệu";
  return `<div class="data-card"><span class="data-label">${escapeHtml(label)}</span><strong class="data-value electron-configuration">${value}</strong></div>`;
}

function elementPhotoMarkup(element) {
  if (!element.image_url) return "";
  const alt = element.image_title || `Mẫu vật của ${element.name}`;
  const credit = element.image_attribution || "Nguồn ảnh: Wikimedia Commons";
  return `
    <section class="detail-section element-photo-section">
      <h2 class="section-heading">Mẫu vật thực tế</h2>
      <figure class="element-photo">
        <div class="element-photo-frame">
          <img class="element-photo-image" src="${escapeHtml(element.image_url)}" alt="${escapeHtml(alt)}" loading="eager" decoding="async">
        </div>
        <figcaption class="element-photo-caption">
          <span>${escapeHtml(credit)}</span>
          <a href="${escapeHtml(element.image_url)}" target="_blank" rel="noreferrer">Mở ảnh gốc</a>
        </figcaption>
      </figure>
    </section>`;
}

function applicationsFor(element) {
  if (APPLICATIONS[element.symbol]) return APPLICATIONS[element.symbol];
  if (element.number >= 104) {
    return [
      ["🔬", "Chỉ tạo được với lượng cực nhỏ trong phòng thí nghiệm."],
      ["⚛️", "Chủ yếu phục vụ nghiên cứu cấu trúc hạt nhân và nguyên tố siêu nặng."]
    ];
  }
  if (element.number >= 84) {
    return [
      ["🔬", "Ứng dụng chủ yếu trong nghiên cứu phóng xạ và hạt nhân."],
      ["⚠️", "Không có ứng dụng dân dụng phổ biến; cần kiểm soát phóng xạ."]
    ];
  }
  return [
    ["🧪", "Được nghiên cứu trong hóa học, địa chất và khoa học vật liệu."],
    ["🏭", "Một số hợp chất hoặc đồng vị có ứng dụng chuyên biệt; cần xét từng dạng cụ thể."]
  ];
}

function safetyNote(element) {
  const symbol = element.symbol;
  if (["Be", "As", "Cd", "Hg", "Tl", "Pb", "Po"].includes(symbol)) {
    return "Nguyên tố hoặc nhiều hợp chất của nó có độc tính đáng lưu ý. Tránh tiếp xúc, hít bụi/hơi và xử lý theo quy định an toàn hóa chất.";
  }
  if (element.number >= 84 || ["Tc", "Pm"].includes(symbol)) {
    return "Có tính phóng xạ; việc lưu trữ và nghiên cứu cần cơ sở chuyên môn, che chắn và quy trình bảo vệ bức xạ.";
  }
  if (element.group === 1 && symbol !== "H") {
    return "Kim loại kiềm phản ứng mạnh, đặc biệt với nước và hơi ẩm. Không tự ý tiếp xúc hoặc thử nghiệm ngoài phòng thí nghiệm.";
  }
  if (["F", "Cl", "Br", "I", "At", "Ts"].includes(symbol)) {
    return "Halogen dạng đơn chất có thể độc, ăn mòn hoặc phản ứng mạnh. Chỉ thao tác trong điều kiện kiểm soát chuyên nghiệp.";
  }
  if (symbol === "H") {
    return "Hydro rất dễ cháy; hỗn hợp với không khí có thể phát nổ. Cần tránh nguồn bắt lửa và thông gió phù hợp.";
  }
  if (symbol === "O") {
    return "Oxy không cháy nhưng làm đám cháy bùng mạnh hơn. Không để oxy đậm đặc tiếp xúc với dầu mỡ hoặc nguồn lửa.";
  }
  if (element.group === 18) {
    return "Khí hiếm nhìn chung ít phản ứng, nhưng nồng độ cao trong không gian kín có thể làm giảm oxy và gây ngạt.";
  }
  return "Mức độ nguy hại phụ thuộc vào dạng đơn chất, hợp chất và liều tiếp xúc. Tham khảo phiếu an toàn hóa chất (SDS) trước khi thao tác.";
}

function originText(element) {
  const origin = NAME_ORIGINS[element.symbol];
  const discovered = element.discovered_by || "Chưa xác định";
  const discoveryYear = DISCOVERY_YEARS[element.symbol] || "chưa xác định chính xác";
  const namedBy = element.named_by ? ` Người đặt tên: ${element.named_by}.` : "";
  const nameNote = origin ? ` ${origin}` : " Nguồn gốc tên gọi chi tiết chưa được tổng hợp trong mục này.";
  return `Người phát hiện hoặc ghi nhận: ${discovered} (${discoveryYear}).${namedBy}${nameNote} Mốc năm của một số nguyên tố siêu nặng có thể khác nhau tùy tiêu chí công nhận.`;
}

function openDetails(element) {
  currentElement = element;
  temperatureUnit = "C";
  renderDetails();
  dialog.showModal();
  closeDialogButton.focus();
}

function renderDetails() {
  const element = currentElement;
  if (!element) return;

  const category = categoryKey(element);
  const oxidation = OXIDATION_STATES[element.symbol] ||
    (category === "lanthanoid" || category === "actinide" ? "Thường gặp: +3" : "Chưa có dữ liệu thống nhất");
  const shellDistribution = Array.isArray(element.shells) ? element.shells.join(", ") : null;
  const phase = `${phaseLabel(element.phase)} (ở 20 °C)`;
  const position = `Chu kỳ ${element.period} · Nhóm ${element.group} · Khối ${element.block || "—"}`;
  const applications = applicationsFor(element)
    .map(([icon, text]) => `<div class="application-card"><span class="application-icon" aria-hidden="true">${icon}</span>${escapeHtml(text)}</div>`)
    .join("");
  const photo = elementPhotoMarkup(element);

  detailContent.innerHTML = `
    <section class="detail-hero element--${category}" style="--cell-accent: var(--${category === "alkali" ? "blue" : category === "alkaline" ? "gold" : category === "transition" ? "coral" : category === "post" ? "mint" : category === "metalloid" ? "violet" : category === "halogen" ? "aqua" : category === "noble" ? "rose" : category === "lanthanoid" ? "mint" : category === "actinide" ? "gold" : "coral"})">
      <div class="atom-art" aria-label="Minh họa mô hình nguyên tử">
        <span class="atom-orbit atom-orbit--one"></span><span class="atom-orbit atom-orbit--two"></span>
        <span class="atom-orbit atom-orbit--three"></span><span class="atom-core">${escapeHtml(element.symbol)}</span>
      </div>
      <div>
        <p class="detail-kicker">Nguyên tố số ${element.number}</p>
        <div class="detail-heading">
          <span class="detail-symbol" id="detail-title">${escapeHtml(element.symbol)}</span>
          <button class="pronounce-button" id="pronounce" type="button" aria-label="Nghe cách phát âm ${escapeHtml(element.name)}" title="Nghe phát âm">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15 9a4 4 0 0 1 0 6"></path><path d="M18 6a8 8 0 0 1 0 12"></path></svg>
          </button>
        </div>
        <p class="detail-name">${escapeHtml(element.name)}</p>
        <div class="detail-meta">
          <span class="meta-chip">${escapeHtml(categoryLabel(element))}</span>
          <span class="meta-chip">${escapeHtml(phase)}</span>
        </div>
      </div>
    </section>
    <div class="detail-body">
     ${photo}
      <section class="detail-section">
        <h2 class="section-heading">Thông số hóa học</h2>
        <div class="data-grid">
          ${detailCard("Nguyên tử khối trung bình", `${formatAtomicMass(element)} u`)}
         ${electronConfigurationCard("Cấu hình electron rút gọn", element.electron_configuration_semantic)}
         ${electronConfigurationCard("Cấu hình electron đầy đủ", element.electron_configuration)}
          ${detailCard("Phân bố electron theo lớp", displayValue(shellDistribution))}
          ${detailCard("Số oxi hóa phổ biến", oxidation)}
          ${detailCard("Độ âm điện Pauling", displayValue(element.electronegativity_pauling))}
          ${detailCard("Vị trí trong bảng", position)}
          ${detailCard("Trạng thái vật chất", phase)}
        </div>
      </section>
      <section class="detail-section">
        <h2 class="section-heading">
          <span>Tính chất vật lý</span>
          <button class="temperature-toggle" id="temperature-toggle" type="button">Đổi sang ${temperatureUnit === "C" ? "K" : "°C"}</button>
        </h2>
        <div class="data-grid">
          ${detailCard("Nhiệt độ nóng chảy", formatTemperature(element.melt))}
          ${detailCard("Nhiệt độ sôi", formatTemperature(element.boil))}
          ${detailCard("Khối lượng riêng", displayValue(element.density_g_cm3, " g/cm³"))}
          ${detailCard("Bán kính nguyên tử", displayValue(element.atomic_radius_pm, " pm"))}
          ${detailCard("Năng lượng ion hóa lần 1", displayValue(element.ionization_energy_kj_mol, " kJ/mol"))}
          ${detailCard("Ngoại quan", displayValue(element.appearance))}
        </div>
      </section>
      <section class="detail-section">
        <h2 class="section-heading">Ứng dụng thực tế</h2>
        <div class="applications">${applications}</div>
      </section>
      <section class="detail-section">
        <h2 class="section-heading">Nguồn gốc & lịch sử</h2>
        <p class="detail-copy">${escapeHtml(originText(element))}</p>
      </section>
      <section class="detail-section">
        <h2 class="section-heading">Lưu ý an toàn</h2>
        <p class="safety-note">${escapeHtml(safetyNote(element))}</p>
      </section>
    </div>`;

  const image = detailContent.querySelector(".element-photo-image");
  if (image) {
    image.addEventListener("error", () => {
     const frame = image.closest(".element-photo-frame");
     const fallback = document.createElement("p");
     fallback.className = "photo-fallback";
     fallback.textContent = "Ảnh mẫu không tải được. Mô hình nguyên tử minh họa ở đầu thẻ vẫn có sẵn.";
     frame.replaceChildren(fallback);
    });
  }

  detailContent.querySelector("#temperature-toggle").addEventListener("click", () => {
    temperatureUnit = temperatureUnit === "C" ? "K" : "C";
    renderDetails();
  });
  detailContent.querySelector("#pronounce").addEventListener("click", pronounceElement);
  const speechAvailable = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  detailContent.querySelector("#pronounce").disabled = !speechAvailable;
}

function pronounceElement() {
  if (!currentElement || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentElement.name);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  currentElement = null;
  window.speechSynthesis?.cancel();
});

if (Array.isArray(window.PERIODIC_ELEMENTS) && window.PERIODIC_ELEMENTS.length === 118) {
  elements = window.PERIODIC_ELEMENTS;
  buildTable();
} else {
  table.innerHTML = '<p class="load-error">Không tải được dữ liệu 118 nguyên tố. Hãy kiểm tra tệp elements-data.js.</p>';
  resultCount.textContent = "Không tải được dữ liệu";
}
