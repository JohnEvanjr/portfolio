import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faBirthdayCake, faMale, faPhone, faMailBulk, 
  faSchool, faGuitar, faBook 
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-12">
        {/* Sidebar */}
        <aside className="md:col-span-4 bg-slate-300 py-10">
          <div className="m-14 text-center">
            <img src="src/img/avademoportfo2.jpg" alt="Avatar" className="mx-auto" />
          </div>
          <div className="mx-5 my-5">
            <SectionTitle title="THÔNG TIN CÁ NHÂN" />
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faBirthdayCake}
                className="text-gray-800 text-3xl w-10"
              />
              <p className="text-xl">19/02/2004</p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faMale}
                className="text-gray-800 text-3xl w-10"
              />
              <p className="text-xl ml-1">Nam</p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-800 text-3xl w-10"
              />
              <p className="text-xl ml-1">0376699063</p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="text-gray-800 text-3xl w-10"
              />
              <p className="text-xl ml-1">Emangafromnowhere@mail.com</p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faHome}
                className="text-gray-800 text-3xl w-10"
              />
              <p className="text-xl ml-3">
                F.HOME 655/49 Lê Trọng Tấn, Bình Hưng Hòa, Bình Tân, TP. HCM
              </p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-2">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-800 text-3xl w-10"
              />
              <a
                target="blank"
                href="https://github.com/JohnEvanjr?tab=repositories"
                className="text-xl ml-3"
              >
                https://github.com/JohnEvanjr?tab=repositories
              </a>
            </div>
          </div>
          <div className="mx-5 my-5 text-xl">
            <SectionTitle title="TRÌNH ĐỘ HỌC VẤN" />
            <div className="flex items-center gap-4 my-4 mx-3">
              <FontAwesomeIcon
                icon={faSchool}
                className="text-gray-800 text-3xl w-10"
              />
              <p
                className="text-2xl ml-2"
              >
                Trường Đại Học Công Thương TP.Hồ Chí Minh 
              </p>
            </div>
            <p className="ml-10 my-2">Ngành: Công nghệ thông tin</p>
            <p className="ml-10 my-2">Chuyên ngành: Công nghệ phần mềm</p>
          </div>
          <div className="mx-5 my-5 text-xl">
            <SectionTitle title="SỞ THÍCH" />
            <div className="flex items-center gap-4 my-4 mx-3">
              <FontAwesomeIcon
                icon={faGuitar}
                className="text-gray-800 text-3xl w-10"
              />
              <p
                className="text-xl ml-2"
              >
                Âm nhạc
              </p>
            </div>
            <div className="flex items-center gap-4 my-4 mx-3">
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-800 text-3xl w-10"
              />
              <p
                className="text-xl ml-2"
              >
                Sách
              </p>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="md:col-span-8 bg-slate-100 py-10">
          <h2 className="text-4xl md:text-7xl font-bold text-center my-5 mt-20 md:mt-32 mb-10">PHẠM ĐÌNH VĂN</h2>
          <Section title="KỸ NĂNG">
            <SkillCategory title="Kỹ năng chuyên ngành">
              <SkillItem text="Frontend: ReactJS, TypeScript, Vite, Bootstrap, TailwindCSS" />
              <SkillItem text="Backend: NodeJS, Java, Laravel, ASP.NET" />
              <SkillItem text="Database: MySQL, PostgreSQL, Supabase" />
            </SkillCategory>
            <SkillCategory title="Kỹ năng mềm">
              <SkillItem text="Làm việc nhóm, giao tiếp tốt, giải quyết vấn đề" />
              <SkillItem text="Viết nội dung, kỹ năng thuyết trình, quản lý đội ngũ" />
              <SkillItem text="Tin học văn phòng, giao tiếp tốt bằng tiếng Anh" />
            </SkillCategory>
          </Section>
          <Section title="KINH NGHIỆM LÀM VIỆC">
            <p className="mx-8 md:mx-28 my-5 text-xl md:text-2xl leading-10">
              <strong>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU NGUYỄN DUY</strong>
              <br />
              <strong>Vị trí:</strong> Intern Data Engineer & FE, BE Supporter
            </p>
          </Section>
          <Section title="MỤC TIÊU">
            <p className="mx-8 md:mx-28 my-5 text-xl md:text-2xl leading-10">
              Áp dụng, phát triển kiến thức đã có, trau dồi kiến thức mới, nâng cao kỹ năng, tích lũy kinh nghiệm
            </p>
            <p className="mx-8 md:mx-28 my-5 text-xl md:text-2xl leading-10">
              Tham gia các dự án thực tế, hiểu rõ môi trường làm việc, tìm điểm hạn chế, phát triển kiến thức chuyên môn và kỹ năng mềm
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="p-3 rounded-full bg-slate-600 text-white font-bold text-xl md:text-2xl text-center">
      {title}
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 my-4 mx-2">
      <FontAwesomeIcon icon={icon} className="text-gray-800 text-xl md:text-3xl" />
      <p className="text-lg md:text-xl">{text}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <>
      <div className="p-3 rounded-full bg-slate-600 text-white font-bold text-xl md:text-2xl text-center mx-12 md:mx-24">
        {title}
      </div>
      <div className="my-5">{children}</div>
    </>
  );
}

function SkillCategory({ title, children }) {
  return (
    <div className="my-10">
      <h2 className="mx-8 md:mx-16 text-xl md:text-3xl font-bold">{title}</h2>
      <ul className="mx-12 md:mx-28 text-lg md:text-2xl">{children}</ul>
    </div>
  );
}

function SkillItem({ text }) {
  return <li className="my-3 md:my-5">{text}</li>;
}
