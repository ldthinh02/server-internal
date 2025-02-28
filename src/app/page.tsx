import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="white:invert"
          src="/error-server.jpg"
          alt="Next.js logo"
          width={480}
          height={38}
          priority
        />

        <p className="w-[480px] font-bold uppercase text-center leading-0">
          Công ty TNHH Quản Lý Dữ Liệu Tiên Tiến
        </p>

        <p className="w-[480px] font-bold uppercase text-center m-0 leading-0">
          timviecldo.vn
        </p>

        <div className="w-[480px] leading-0 text-center">
          Tầng 4, 26 Liễu Giai, Ba Đình, Hà Nội
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] w-[480px]">
          <li className="mb-2">Chúng tôi chân thành xin lỗi quý khách hàng vì sự bất tiện này.</li>
          <li>
            Chúng tôi chân thành cảm ơn quý khách đã quan tâm đến các sản phẩm
            dịch vụ của chúng tôi!
          </li>
          <li>
            Để được hỗ trợ tận tình nhất, Vui lòng liên hệ{" "}
            <strong>hotline</strong>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            1900-866-661
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:text-white hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
            rel="noopener noreferrer"
          >
            Nhánh 1 - Để gặp tư vấn viên
          </a>
        </div>
      </main>
    </div>
  );
}
