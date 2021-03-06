import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer";
import {useEffect} from "react"
export default function Home() {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.nextArrow}
        onClick={onClick}
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.98619 27.9636L19.5208 10.0995L1.65665 0.564881L0.0661297 3.54238L14.9549 11.4876L7.00758 26.3752L9.98619 27.9636Z" fill="white"/>
        </svg>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return null;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
        }
      },
    ]
  }

  useEffect(() => { /* future dev note: useEffect for the splash screen on / page */
    let splash = document.querySelector(".splashContainer")
    let home = document.querySelector(".page")
    setTimeout(() => {
      splash.style.display = "none"; 
      home.style.display = "block";
    }, 1500) 
  }, [])

  return (
    <>
      <Head>
        <title>OnlyFrens NFT</title>
        <meta name="description" content="OnlyFrens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.splash + " " + "splashContainer"}>
        <div className={styles.splashInner}>
          <img src="/big-logo.png" alt="splash screen logo" width="400" height="160"/>
        </div>
      </div>

      <div className={styles.container + " " + "page"}>
      <div className={styles.upperContainer}>
        <Navbar />

        <div className={styles.hero}>
          <div className={styles.left}>
            <h1>Frens NFT <span>is just</span> the beginning!</h1>
            <p>To be true Frens for life we must build towards something greater and take the road less traveled! Why should we be limited to only artwork and memes?</p>
            <div className={styles.info}>
              <div>
                <p>Artwork</p>
                <h2>27K+</h2>
              </div>
              <div>
                <p>Auction</p>
                <h2>19k</h2>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src="/hero.png" className={styles.rightDesktop} width="500" height="650" alt="illustration"></img>
            <img src="/hero-mobile.png" className={styles.rightMobile} alt="illustration"></img>
          </div>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.leftImage}>
            <img src="/banner.png" className={styles.bannerImage} layout="fixed" width="500" height="450" alt="illustration"></img>
          </div>
          <div className={styles.bannerText}>
            <p>What is 
              <svg width="198" height="77" viewBox="0 0 198 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_48:1339)">
                <path d="M3.67447 53.5541C3.26901 49.9234 4.22025 46.2704 6.34602 43.2947C7.42266 41.8291 8.79606 40.6055 10.3771 39.7036C12.0699 38.7428 13.941 38.1361 15.8761 37.9204C17.8113 37.7046 19.77 37.8844 21.6329 38.4488C23.3635 38.9759 24.9631 39.8613 26.3272 41.0472C27.66 42.23 28.7614 43.6492 29.5756 45.2328C30.428 46.8741 30.9668 48.6595 31.1643 50.4979C31.567 54.1317 30.6111 57.7867 28.48 60.7621C27.4003 62.2314 26.0233 63.4581 24.4383 64.3627C22.7465 65.3255 20.876 65.9342 18.9409 66.1516C17.0058 66.3691 15.0468 66.1907 13.1836 65.6274C11.4536 65.1004 9.8567 64.2106 8.49965 63.0178C7.17468 61.829 6.07916 60.4081 5.26727 58.8254C4.41198 57.1828 3.87178 55.395 3.67447 53.5541ZM5.7739 53.3201C5.9906 55.4673 6.74125 57.5262 7.95776 59.3101C9.12835 61.0407 10.7474 62.4221 12.6427 63.3072C14.5711 64.1871 16.7028 64.5285 18.8108 64.2953C20.9189 64.0621 22.9244 63.2628 24.6138 61.9827C26.26 60.7105 27.527 59.0141 28.2778 57.0765C28.9509 55.2993 29.2429 53.4012 29.1347 51.5047C29.0266 49.6083 28.5207 47.7559 27.6499 46.0671C26.9369 44.6831 25.9667 43.447 24.791 42.4245C23.6165 41.423 22.2511 40.6687 20.777 40.2067C19.2376 39.7122 17.6096 39.5529 16.0029 39.7394C13.8935 39.9479 11.8863 40.7493 10.2146 42.0505C8.57293 43.3244 7.30969 45.0201 6.56045 46.9556C5.77647 48.9801 5.50737 51.1666 5.7772 53.3197L5.7739 53.3201Z" fill="white"/>
                <path d="M36.224 63.7413L34.0089 43.8718L35.9352 43.657L36.3468 47.3492C37.6269 44.3935 39.8694 42.737 43.0744 42.3797C45.5416 42.1047 47.5685 42.6428 49.1551 43.994C50.7416 45.3453 51.6709 47.2406 51.9429 49.6802L53.2986 61.8411L51.3904 62.0538L50.0725 50.2318C49.842 48.1642 49.099 46.5812 47.8434 45.4829C46.5878 44.3846 44.9676 43.9455 42.983 44.1657C41.0116 44.3854 39.4425 45.2378 38.2756 46.7227C37.1087 48.2077 36.6386 49.9815 36.8652 52.044L38.1466 63.5386L36.224 63.7413Z" fill="white"/>
                <path d="M57.5218 61.367L54.3499 32.9136L56.2563 32.701L59.4283 61.1544L57.5218 61.367Z" fill="white"/>
                <path d="M59.7018 41.0076L61.9332 40.7588L72.1933 57.5925L77.406 39.0339L79.5038 38.8001L73.1802 60.3344C72.551 62.458 71.7569 64.0174 70.7982 65.0127C69.8394 66.008 68.6234 66.5834 67.1503 66.7387C65.7936 66.8824 64.422 66.7396 63.1246 66.3196L63.5877 64.5722C64.7084 64.9592 65.9041 65.0808 67.0803 64.9274C67.5789 64.8819 68.0637 64.7385 68.5068 64.5056C68.9498 64.2727 69.3425 63.9548 69.6622 63.5701C70.327 62.7831 70.9335 61.4939 71.4818 59.7025L59.7018 41.0076Z" fill="white"/>
                <path d="M181.394 39.6086C185.884 36.7926 190.639 34.765 195.402 32.6931C194.809 31.8664 194.805 31.8335 194.317 32.0561C191.129 33.5143 187.934 34.9616 184.766 36.4675C183.529 37.0552 182.37 37.8057 181.146 38.4419C180.371 38.8465 180.09 38.7095 179.75 37.9062C179.579 37.5326 179.503 37.1224 179.53 36.7124C179.557 36.3023 179.686 35.9053 179.904 35.5569C180.182 35.0716 180.509 34.6155 180.879 34.1955C183.264 31.6192 186.486 29.3442 188.804 29.4806C189.96 29.55 188.77 30.5555 187.713 33.0356C189.855 30.5362 190.229 29.4001 190.237 29.3792C190.352 29.0332 190.472 28.7349 190.557 28.419C190.964 26.9177 190.282 25.9509 188.701 25.814C188.294 25.7915 187.886 25.8008 187.48 25.8418C185.446 25.987 183.615 26.7558 181.903 27.7862C179.647 29.1439 177.689 30.803 176.691 33.3647C176.46 33.9602 175.981 34.485 175.556 34.9754C172.829 38.0714 170.089 41.1532 167.337 44.2208C167.243 44.3246 167.144 44.4239 167.05 44.526C167.137 45.1344 167.293 45.7333 167.391 46.3387C170.101 43.1059 172.818 39.8789 175.544 36.6577C175.829 36.3499 176.131 36.0577 176.448 35.7823L178.933 39.5215C178.64 39.7475 178.345 39.9919 178.032 40.2133C176.542 41.2723 174.981 42.2459 173.582 43.4147C172.858 44.0495 172.297 44.8484 171.946 45.7443C171.297 47.4092 172.197 48.7665 173.989 48.7866C177.416 48.8293 180.233 47.4658 182.274 44.6979C183.3 43.3008 183.215 42.1576 182.211 40.7669C181.965 40.4178 181.709 40.0533 181.394 39.6086ZM179.691 42.667C178.775 43.4354 177.734 44.068 176.701 44.6846C176.206 44.9463 175.674 45.1288 175.123 45.2253C174.888 45.2781 174.61 45.1159 174.113 44.9847C175.718 42.915 177.819 41.8529 179.771 40.5225C180.539 41.4164 180.268 42.1796 179.691 42.667Z" fill="white"/>
                <path d="M113.829 36.7141C113.392 37.4775 113.117 38.0063 112.797 38.5067C110.844 41.5563 108.926 44.6254 107.828 48.0977C107.407 49.453 107.144 50.8523 107.046 52.2678C106.9 54.2831 107.857 55.3957 109.641 55.54C109.844 55.1725 110.078 54.785 110.28 54.381C111.029 52.8782 111.761 51.3674 112.514 49.8658C115 44.9094 118.193 40.4672 122.24 36.6544C122.692 36.2241 123.095 35.6679 123.861 35.6208C123.092 37.2957 122.334 38.8944 121.623 40.5129C121.17 41.5462 120.9 42.6275 121.018 43.7754C121.119 44.6787 121.547 45.2589 122.459 45.5255C123.991 45.971 125.286 45.4219 126.469 44.5787C127.652 43.7355 128.804 42.7725 129.98 41.8801C130.317 41.6243 130.697 41.4237 131.058 41.1986C131.063 41.3835 131.047 41.5683 131.013 41.75C131.516 41.0575 131.621 40.0447 131.8 39.0919C130.106 40.3735 128.492 41.7711 126.797 43.0579C126.191 43.5186 125.588 44.1922 124.623 43.8849C124.268 43.03 124.714 42.3339 125.048 41.7036C125.915 40.0927 126.888 38.5384 127.819 36.9603C128.05 36.568 128.334 36.1949 128.507 35.7759C128.959 34.6859 128.476 33.4805 127.295 32.6226C126.239 31.8557 125.77 31.8798 124.615 32.8731C122.53 34.6647 120.404 36.4126 118.649 38.5523C117.999 39.3443 117.302 40.0984 116.627 40.87C116.987 39.7056 117.529 38.6051 118.233 37.6091C119.394 36.0371 118.532 34.5341 117.197 33.5717C116.747 33.2488 116.387 33.3706 116.027 33.7939C115.293 34.6602 114.31 35.9975 113.829 36.7141Z" fill="white"/>
                <path d="M170.65 27.8277C169.632 26.9418 168.948 26.9781 167.825 27.9478C164.312 30.9763 160.947 34.1584 157.899 37.6582C155.995 39.8479 154.158 42.0982 152.281 44.3131C152.053 44.5819 151.899 45.0438 151.184 44.8219C151.691 43.7959 152.11 42.8246 152.633 41.9085C154.271 39.0389 155.875 36.1431 157.637 33.3547C158.793 31.52 158.107 30.3505 156.952 29.3581C156.239 28.7446 155.909 28.7715 155.355 29.5728C154.099 31.3787 152.902 33.2379 151.644 35.0505C151.336 35.4925 150.983 35.9015 150.59 36.2709C147.003 39.6692 143.412 43.0514 139.786 46.4024C138.178 47.8876 136.465 49.2581 134.495 50.2506C133.954 50.5269 133.37 50.7087 132.768 50.7879C131.604 50.9177 130.985 50.2687 131.239 49.1476C131.426 48.3547 131.703 47.5856 132.064 46.8551C134.24 42.4097 137.335 38.6431 140.875 35.2283C141.84 34.3268 142.868 33.4946 143.952 32.7381C144.494 32.3445 145.17 32.1375 145.801 31.8389C146.352 32.7337 145.868 33.2924 145.554 33.8304C144.276 36.0203 142.407 37.6795 140.504 39.3043C138.768 40.7771 134.033 43.6372 132.287 45.0678C132.538 45.8227 144.34 39.4564 146.845 35.449C147.37 34.5685 147.77 33.6196 148.034 32.6295C148.506 30.9777 147.462 29.5698 145.743 29.6349C144.247 29.6934 142.912 30.2436 141.616 30.8878C137.576 32.8942 134.431 36.02 131.455 39.2936C130.13 40.7556 128.402 43.4653 127.68 45.648C127.617 45.8237 127.563 46.0026 127.52 46.184C127.386 46.8119 127.305 46.8509 127.332 49.1751C127.369 51.6497 128.761 53.4885 131.571 53.0969C133.554 52.8209 135.278 51.9924 136.825 50.7988C138.072 49.8369 139.273 48.7951 140.412 47.7137C142.67 45.5812 144.876 43.3946 147.11 41.2382C147.488 40.8728 147.906 40.5464 148.305 40.2021C148.344 40.73 148.242 41.2589 148.008 41.7344C147.216 43.6135 146.572 45.5327 146.491 47.5989C146.425 49.3737 147.056 50.4312 148.818 51.136C151.239 47.3945 153.879 43.7419 156.864 40.3407C159.878 36.9112 163.093 33.6927 166.718 30.8681C166.667 31.255 166.534 31.6268 166.329 31.9593C165.638 33.0874 164.908 34.1916 164.23 35.3251C162.842 37.6453 161.549 40.0034 160.777 42.6114C160.313 44.184 159.971 45.7581 160.37 47.4077C160.868 49.4578 162.474 50.22 164.282 49.1372C165.1 48.6478 166.833 46.9554 167.465 46.2419C167.576 46.1163 167.178 44.3716 167.069 44.4954C166.633 44.9888 165.826 45.9417 165.311 46.3572C165.082 46.5392 164.703 46.5333 164.348 46.6311C163.986 45.4853 164.36 44.5541 164.777 43.7247C166.306 40.684 167.903 37.6758 169.521 34.6802C170.174 33.4729 170.97 32.3447 171.659 31.1568C172.348 29.9689 171.841 28.8594 170.65 27.8277Z" fill="white"/>
                <path d="M80.6738 38.3447C80.1556 38.3692 79.6474 38.3492 79.1338 38.3248C78.6201 38.3005 78.1089 38.2375 77.5947 38.1633C76.5418 38.0191 75.5098 37.7512 74.5202 37.3649C73.9957 37.1539 73.4934 36.8919 73.0205 36.5826C72.5035 36.2427 72.0454 35.8212 71.6641 35.3345C71.2455 34.7964 70.9529 34.1716 70.8074 33.506C70.6737 32.8442 70.668 32.1629 70.7907 31.4989C71.0238 30.2202 71.581 29.1669 72.1847 28.2167C72.7899 27.3053 73.4717 26.4468 74.2229 25.6507L74.7746 25.0728L75.3413 24.5099L75.9172 23.9693L76.5022 23.4509C76.893 23.1075 77.2853 22.7623 77.6936 22.4402L78.3067 21.9488L78.6132 21.703L78.921 21.4688C80.5706 20.2111 82.3071 19.0712 84.1176 18.0576L84.793 17.6758C85.0195 17.5506 85.2505 17.4366 85.4792 17.3161C85.9371 17.0802 86.3946 16.8409 86.8588 16.6159L88.26 15.96C88.7364 15.7403 89.2046 15.5515 89.6761 15.3474L90.3876 15.0498L91.1065 14.7731C91.5869 14.5896 92.0666 14.3995 92.548 14.2243C93.5118 13.8836 94.4746 13.5331 95.4547 13.2339C97.3973 12.5959 99.3598 12.0323 101.329 11.5162C105.262 10.4951 109.253 9.71307 113.28 9.17443C117.29 8.6578 121.324 8.34549 125.365 8.23871C133.414 8.05883 141.462 8.61135 149.409 9.88943L149.361 10.2829C141.389 9.64903 133.389 9.53971 125.477 10.2136C121.522 10.5359 117.586 11.0592 113.685 11.7814C109.801 12.4749 105.963 13.4035 102.191 14.5618C101.719 14.6994 101.255 14.8612 100.789 15.0147C100.324 15.1682 99.8547 15.3187 99.3941 15.485C98.4716 15.8228 97.5487 16.1555 96.6436 16.5296C95.7386 16.9037 94.8375 17.2824 93.9317 17.6649C93.4846 17.863 93.0457 18.0751 92.6027 18.2794L91.941 18.5898L91.2878 18.9158C89.5318 19.7595 87.8288 20.689 86.1465 21.6395C84.4642 22.59 82.8162 23.5933 81.2288 24.6764L80.9272 24.8767L80.6322 25.0761L80.0424 25.4917C79.645 25.7609 79.2706 26.0575 78.8834 26.3439C78.1117 26.9097 77.3756 27.5114 76.6744 28.126C75.9909 28.724 75.3515 29.3703 74.7612 30.0601C74.2117 30.7327 73.7463 31.4409 73.5144 32.1164C73.4067 32.4277 73.3523 32.7547 73.3534 33.0839C73.3696 33.4074 73.4562 33.7234 73.6069 34.0102C73.9227 34.6413 74.5792 35.2428 75.3406 35.7376C76.1451 36.2453 76.9975 36.673 77.8857 37.0147C78.34 37.1956 78.804 37.3588 79.2766 37.5093C79.7492 37.6599 80.2262 37.8049 80.7029 37.9317L80.6738 38.3447Z" fill="white"/>
                <path d="M81.3831 44.7523C81.2883 44.6671 81.2301 44.5488 81.2203 44.4218C81.2105 44.2949 81.2499 44.169 81.3304 44.0702C81.4299 43.9592 81.5287 43.8566 81.6181 43.775C81.803 43.6061 81.9915 43.4102 82.176 43.268C82.5458 42.9602 82.9185 42.6638 83.2943 42.4104C83.6598 42.1429 84.039 41.8943 84.4301 41.6657C84.8098 41.4318 85.1889 41.193 85.5796 40.9979L86.7398 40.3821L87.9166 39.8395C88.6959 39.4611 89.4976 39.1635 90.2894 38.852C93.4469 37.6787 96.6829 36.7279 99.9737 36.0066C101.604 35.6549 103.238 35.3318 104.875 35.0371C106.517 34.7875 108.153 34.4851 109.8 34.2832C111.447 34.0812 113.091 33.853 114.732 33.6967L116.55 33.529L116.888 33.8062L114.807 34.2048C113.19 34.5332 111.591 34.9364 109.986 35.2969C108.382 35.6573 106.805 36.1329 105.218 36.5447C103.643 37.0035 102.079 37.4866 100.526 37.994C97.4512 39.0138 94.4514 40.246 91.5482 41.6818C90.8435 42.0552 90.1257 42.4018 89.4562 42.8212L88.4412 43.4224L87.4769 44.073C87.1472 44.2763 86.8585 44.5168 86.5505 44.7493C86.2493 44.9684 85.9606 45.2042 85.6858 45.4554C85.4149 45.6854 85.1568 45.93 84.9126 46.1879C84.6824 46.4152 84.388 46.7845 83.8833 46.4509L81.3831 44.7523Z" fill="white"/>
                <path d="M116.873 16.4183C117.196 16.8044 117.356 17.3009 117.318 17.8026C117.281 18.3044 117.049 18.7719 116.672 19.1061C116.34 19.3979 116.008 19.6982 115.691 19.9951C114.87 20.7362 114.077 21.5277 113.278 22.3163C111.719 23.9244 110.179 25.5719 108.736 27.3004C105.794 30.7577 103.077 34.3991 100.601 38.2022C99.9576 39.1418 99.3984 40.132 98.7914 41.0976C98.1844 42.0631 97.5919 43.0387 97.0562 44.0446L95.3868 47.0426L93.8628 50.1027C92.7988 52.1353 91.9522 54.262 91.0155 56.3588C90.1154 58.4697 89.3656 60.6406 88.5313 62.7876L88.544 62.7362C88.3273 63.5574 88.1665 64.3924 88.0629 65.2352C88.0286 65.6322 88.0045 66.0747 88.0972 66.3525C88.1559 66.5042 88.1491 66.4883 88.1915 66.5086C88.3338 66.5058 88.4723 66.4615 88.5896 66.3809C89.259 65.9898 89.8706 65.3202 90.4501 64.6926C90.4501 64.6926 91.7001 63.5038 90.8392 65.0074C90.3005 65.7171 89.7769 66.4268 88.9767 67.0074C88.7391 67.1879 88.4514 67.2909 88.1531 67.3025C87.7444 67.3214 87.3819 66.9303 87.3045 66.6708C87.0762 66.1198 87.1085 65.6615 87.0966 65.1947C87.117 64.3533 87.1993 63.5146 87.3428 62.6852L87.4016 62.3888C87.8833 60.0446 88.6008 57.9589 89.3226 55.7462C90.0791 53.5463 90.756 51.3053 91.6535 49.1563L92.9419 45.8859L94.3693 42.6783C94.8284 41.5993 95.3527 40.5514 95.8829 39.5111C96.4131 38.4708 96.9063 37.398 97.4816 36.3727C99.6982 32.2075 102.189 28.1931 104.936 24.3557C106.302 22.421 107.777 20.5574 109.3 18.7201C110.075 17.8009 110.849 16.9 111.671 16.0188C112.034 15.6235 112.389 15.2441 112.759 14.8613C112.949 14.6668 113.178 14.5143 113.431 14.4136C113.684 14.3129 113.955 14.2663 114.227 14.2768C114.499 14.2873 114.766 14.3547 115.01 14.4745C115.254 14.5944 115.471 14.7641 115.645 14.9727L116.873 16.4183Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_48:1339">
                <rect width="192.858" height="55.0028" fill="white" transform="translate(0.131836 21.7749) rotate(-6.36103)"/>
                </clipPath>
                </defs>
              </svg>
              ?
            </p>
            <p><i>More than just an NFT:</i></p>
            <p>
            Yes, the artwork comfy, but why stop there? 
            <br/>
            <br/>
            To be true Frens for life we must build towards something greater and take the road less traveled! Why should we be limited to only artwork and memes?
              <span>
                Connect a<br/> Wallet
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.nfts}>
        <div className={styles.nftsText}>
          <h1><span>Frens</span> NFT</h1>
          <p className={styles.individualP}>
          In partnership with MemeMarketplace, we will give purpose and meaning to owning an NFT. 
          <br/>
          <br/>
          After the Fren mint, OnlyFrens will transform into a web 3.0 social network, the first of its kind.
          </p>
        </div>
        <div className={styles.nftsCarousel}>
          <Slider {...settings}>
            <div className={styles.card}>
                <Image alt="frog" quality="100" src="/frogs/frog1.png" width="238" height="236"></Image>
                <p>FREN #1</p>
                <p>1 SOL</p>
            </div>
            
            <div className={styles.card}>
                <Image alt="frog" quality="100" src="/frogs/frog2.png" width="238" height="236"></Image>
                <p>FREN #2</p>
                <p>1 SOL</p>
            </div>

            <div className={styles.card}>
                <Image alt="frog" quality="100" src="/frogs/frog3.png" width="238" height="236"></Image>
                <p>FREN #3</p>
                <p>1 SOL</p>
            </div>

            <div className={styles.card}>
                <Image alt="frog" quality="100" src="/frogs/frog1.png" width="238" height="236"></Image>
                <p>FREN #4</p>
                <p>1 SOL</p>
            </div>
            
            <div className={styles.card}>
                <Image alt="frog" quality="100" src="/frogs/frog2.png" width="238" height="236"></Image>
                <p>FREN #5</p>
                <p>1 SOL</p>
            </div>

            <div className={styles.card}>
                <Image alt="frog" quality="100"src="/frogs/frog3.png" width="238" height="236"></Image>
                <p>FREN #6</p>
                <p>1 SOL</p>
            </div>
          </Slider>
        </div>
      </div>
    
      <div className={styles.lines}>
        <img src="/line.png" alt="line" className={styles.line}/>
        <img src="/line2.png" alt="line" className={styles.line}/>
      </div>

      <div className={styles.section}>
        <div className={styles.block}>
          <Image src="/block.png" quality="100" width="520" height="620" alt="block"></Image>
        </div>
        <div className={styles.texts}>
          <h1 style={{fontWeight: "600"}}>Giving purpose to holding<br/> An <span style={{fontWeight: "800"}}><i>NFT</i></span>:</h1>
          <p style={{fontWeight: "600"}}><i>Sure, holding an NFT is cool, but what???s the point if you can???t show it off with verification?</i></p>
          <p>When Jay-Z displayed a CryptoPunk as his twitter profile photo the same questions continually echoed by those new to the space with no understanding of NFTs. </p>
        </div>
      </div>
    
      <div className={styles.sectionTwo}>
        <svg width="52" height="132" viewBox="0 0 52 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5251 130.475C24.892 131.842 27.108 131.842 28.4749 130.475L50.7487 108.201C52.1156 106.834 52.1156 104.618 50.7487 103.251C49.3819 101.884 47.1658 101.884 45.799 103.251L26 123.05L6.20101 103.251C4.83418 101.884 2.6181 101.884 1.25126 103.251C-0.115572 104.618 -0.115572 106.834 1.25126 108.201L23.5251 130.475ZM22.5 0L22.5 128H29.5L29.5 0L22.5 0Z" fill="url(#paint0_linear_48:345)"/>
          <defs>
          <linearGradient id="paint0_linear_48:345" x1="26" y1="113" x2="26" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#09ADEE"/>
          <stop offset="1" stopColor="#09ADEE" stopOpacity="0"/>
          </linearGradient>
          </defs>
        </svg>

        <h1>
          <i>What if there was a way for people to show off their NFTs with verified proof? </i>
        </h1>

        <p>Not only that, what if they could use specific NFTs to be granted access to ultra exclusive Gated Access Pages only available to those holding NFTs from certain collections? This can done in a safe and secure environment using established protocols with a solid track record where users will have the option to assume anonymous handles or dox themselves and flex for the whole world to see like Snoop Dogg. </p>

        <p className={styles.cta}>
          <i>ENTER ONLYFRENS</i>
        </p>
      </div>
      <div className={styles.illustration} >
        <img src="/illustration.png" className={styles.image} layout="fixed" alt="illustration" width="524" height="400"></img>
      </div>
    
      <div className={styles.animationWrapper}>
        <div className={styles.neededWrapper}>
          <div className={styles.inner}>
              <img src="/frogs/1.png" className={styles.frog + " " + styles.first}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
          </div>

          <div className={styles.innerTwo}>
              <img src="/frogs/3.png" className={styles.frog + " " + styles.second}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/1.png" className={styles.frog}/>
              <img src="/frogs/2.png" className={styles.frog}/>
              <img src="/frogs/3.png" className={styles.frog}/>
          </div>
        </div>
      </div>
    
      <div className={styles.sectionThree}>
        <div>
          <p>This is what OnlyFrens will accomplish. We will create an ecosystem where the concept of what a collectable is will never be the same. MemeMarketplace will facilitate the sale of NFTs created by top influencers and function as a pipeline into OnlyFrens.These influencers will create ultra-exclusive gated access pages on OnlyFrens only accessible to verified NFT holders of that influencer???s collection.</p>
        </div>
        <div>
          <p>We will give meaning and purpose to owning an NFT making it more than just a digital collectable, but rather a key to gated communities that only the initiated will have permission to enter. Sure, owning an NFT is fun, but we think there needs to be more to it ??? the social element ??? FRENS!  </p>
        </div>
      </div>
    
      <div className={styles.sectionFour}>
        <div>
          <h1>Along with <span>our community</span>,<br/> our behind-the-scenes team<br/> <span>grows</span> as well</h1>
        </div>
        <div className={styles.contact}>
          <svg width="212" height="212" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="106" cy="106" r="102" fill="#09ADEE"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M207.049 138.112C210.265 127.983 212 117.194 212 106C212 74.1433 197.947 45.5689 175.702 26.1378C168.535 30.2215 162.831 36.4692 159.418 43.998C155.861 51.8427 154.989 60.6409 156.936 69.0312C141.377 68.2507 126.155 64.2069 112.259 57.1623C98.3628 50.1178 86.1036 40.2299 76.2767 28.1405C71.2719 36.7563 69.7391 46.9557 71.9902 56.662C74.2414 66.3683 80.1073 74.8518 88.3936 80.3851C82.165 80.2025 76.072 78.5223 70.6303 75.4864V75.9824C70.6328 85.0183 73.7607 93.7752 79.4836 100.768C85.2064 107.76 93.1719 112.558 102.029 114.347C96.2671 115.919 90.2216 116.149 84.3572 115.019C86.8591 122.795 91.7283 129.595 98.284 134.468C104.84 139.341 112.754 142.043 120.922 142.198C112.807 148.576 103.515 153.292 93.5758 156.076C83.637 158.859 73.247 159.656 63 158.42C80.8981 169.905 101.723 175.998 122.989 175.97V176C159.875 176 188.198 160.341 207.049 138.112Z" fill="white"/>
          </svg>

          <svg style={{marginLeft: "50px"}} width="212" height="212" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="106" cy="106" r="102" fill="#5865F2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M210.233 86.6252C210.169 86.6244 210.104 86.6239 210.039 86.6239C200.465 86.6239 192.879 95.5475 192.879 106.436C192.879 117.306 200.699 126.217 210.068 126.249C208.137 136.235 204.803 145.721 200.281 154.495C193.108 155.955 185.788 156.697 178.427 156.697C161.711 156.697 145.211 152.871 130.152 145.503C129.843 145.757 129.539 146.008 129.238 146.257C128.215 147.101 127.227 147.917 126.176 148.717C131.359 151.852 136.804 154.518 142.447 156.684C139.473 162.724 136.017 168.506 132.114 173.973C114.709 168.496 98.3709 159.995 83.8266 148.85C80.3999 112.093 87.201 74.8322 112.26 36.6151C124.777 30.6416 138.027 26.3988 151.654 24C153.531 27.4507 155.234 30.9964 156.755 34.6232C165.399 33.2736 174.135 32.7308 182.853 32.9949C196.691 47.5578 206.433 66.0499 210.233 86.6252ZM129.577 106.436C129.577 117.325 137.294 126.249 146.737 126.249C156.258 126.249 163.687 117.325 163.896 106.436C164.106 95.5475 156.337 86.6239 146.737 86.6239C137.137 86.6239 129.577 95.5475 129.577 106.436Z" fill="white"/>
          </svg>
        </div>
      </div>
    
      <div style={{marginTop: "30px"}}>
        <Footer />
      </div>
    </div>
    </>
  )
}
