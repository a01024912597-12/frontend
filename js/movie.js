// 사용자가 날짜를 변경하면 선택된 날짜 가져와서 데이터 요청하러 가기
const dateInput = document.querySelector("#date");

// date 날짜 항상 어제 날짜까지만 가능하도록
const today = () => {
  // 오늘 날짜
  const date = new Date();
  // 어제 날짜
  date.setDate(date.getDate() - 1);
  console.log(date);
  console.log(date.toISOString());
  return date.toISOString().split("T")[0];
};
dateInput.max = today();

async function load(date) {
  // 사용자의 날짜를 입력받아서 해당 날짜의 일별 박스 오피스 보여주기
  const url =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c55aec3c79cb8881621fa462fc5b24d3&targetDt=";
  const requestUrl = url + date;

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);
    // 10개 가져오기
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);
    let result = "";

    dailyBoxOfficeList.forEach((item) => {
      result += `<tr>`;
      result += `<td>${item.rank}</td>`;
      result += `<td>${item.rankInten}</td>`;

      result += `<td><a href="${item.movieCd}">${item.movieNm}</a></td>`;
      result += `<td>${item.openDt}</td>`;
      result += `<td>${item.audiCnt}</td>`;
      result += `<td>${item.audiAcc}</td>`;
      result += `<td>${item.salesAcc}</td>`;
      result += `</tr>`;
    });

    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = result;
    table.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
dateInput.addEventListener("change", (e) => {
  const selDate = e.target.value;
  console.log(selDate);
  // selDate : 2026-08-05 => 20260805
  // selDate.split("-").join("");
  load(selDate.replace("-", "").replace("-", ""));
});

// 영화명 클릭 시 영화 상세 정보 가져와서 화면에 보여주기
// 1) movieCd 가져오기 : href
// 2) a 태그 기능 중지 : e.preventDefault()
const movieDetail = async () => {
  const url =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c55aec3c79cb8881621fa462fc5b24d3&movieCd";
  const requestUrl = url + movieCd;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    data.movieInfoResult.movieInfo;
    //화면에 보여주기
    let result = `<ul>`;
    result += `<li>영화명 : ${info.movieNm}<li>`;
    result += `<li>영어 영화명 : ${info.movieNmEn}<li>`;
    result += `<li>상영시간 : ${info.showTm}<li>`;

    // 장르
    let genres = "";
    info.genres.forEach((genres) => {
      genres += `${genres.genreNm},`;
    });
    result += `<li>장르 : ${genres}<li>`;
    //감독
    let directors = "";
    info.directors.forEach((directors) => {
      directors += `${directors.genreNm},`;
    });
    result += `<li>감독 : ${directors}<li>`;
    //배우
    let actors = "";
    info.actors.forEach((actors) => {
      actors += `${actors.genreNm},`;
    });
    result += `<li>배우 : ${actors}<li>`;
    result += `<li>영화 등급 : ${info.audits[0].watchGradeNm}<li>`;
    result += `</ul>`;

    document.querySelector("#detail").innerHTML = result;
  } catch (error) {}
};

document.querySelector("tbody").addEventListener("click", (e) => {
  e.preventDefault();

  const aTag = e.target;
  // 속성 href
  console.log(aTag.getAttribute("href"));
  const movieCd = aTag.getAttribute("href");
});
