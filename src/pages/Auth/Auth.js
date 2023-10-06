import Logo from "assets/Logo.png";
import Kakao from "assets/Kakao.png";
import Naver from "assets/Naver.png";

const Auth = () => {
  return (
    <>
      {/* 로고 */}
      <img
        src={Logo}
        alt="Logo"
        className="w-[350px] object-contain mx-auto mt-[200px]"
      ></img>
      {/* 카카오 소셜 로그인 버튼 */}
      <div className="w-[250px] mx-auto mt-20">
        <a href="https://www.naver.com">
          <img src={Kakao} alt="카카오" className="w-full" />
        </a>
      </div>
      {/* 네이버 소셜 로그인 버튼 */}
      <div className="w-[250px] mx-auto mt-12">
        <a href="https://www.naver.com">
          <img src={Naver} alt="네이버" className="w-full" />
        </a>
      </div>
    </>
  );
};

export default Auth;
