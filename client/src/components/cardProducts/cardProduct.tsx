import { ArrowDownIcon } from "../../assets/arrowDown";
import { CartMoreIcon } from "../../assets/cartMoreIcon";
import { FlashIcon } from "../../assets/flashIcon";
import { KIcon } from "../../assets/KIcon";

export const CardProductCustom = () => {
  return (
    <div className="basis-full lg:basis-1/3-calc md:basis-1/2-calc">
      <article className="productCard border border-gray-300 drop-shadow-lg p-2 rounded-lg">
        <div className="cardHeader flex justify-between items-center mb-5">
          <div>
            <div className="bg-orange-500 p-2 flex gap-1 font-extrabold text-xs items-center rounded-lg">
              <KIcon />
              <span className="text-white">MEGA DAY</span>
            </div>
          </div>
          <div className="flex gap-2 font-extrabold items-center">
            <button
              aria-label="Adicionar na lista de desejos"
              aria-pressed="false"
              className="sc-b26b3709-7 eqUoCL wishlistCard"
            >
              <img
                alt=""
                src="https://static.kabum.com.br/conteudo/icons/iconHeart.svg"
                width="20"
                height="18"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </button>
            <button
              aria-pressed="false"
              aria-label="Adicionar no carrinho"
              className="sc-50d5e82e-0 bAVqvA"
            >
              <CartMoreIcon />
            </button>
          </div>
        </div>
        <a
          href="/produto/525503/monitor-gamer-aoc-23-8-full-hd-100hz-1ms-ips-displayport-e-hdmi-adaptive-sync-24g2e1"
          className="sc-b26b3709-8 hhNjgu productLink"
          data-smarthintproductid="525503"
          data-smarthintfeature=""
        >
          <div className="flex w-full gap-4">
            <div className="relative">
              <img
                title='Monitor Gamer AOC 23.8" Full HD, 100Hz, 1ms, IPS, DisplayPort e HDMI, Adaptive-Sync - 24G2E1'
                alt='Monitor Gamer AOC 23.8" Full HD, 100Hz, 1ms, IPS, DisplayPort e HDMI, Adaptive-Sync - 24G2E1'
                srcSet="/assets/images/notebook.webp"
                className="h-32 w-60 object-contain bg-transparent"
              />
              <div className="discountTagCard absolute bottom-[15%] bg-orange-500 flex py-1 px-2 gap-1 font-extrabold items-center rounded-md text-xs">
                <ArrowDownIcon />
                <p>14%</p>
              </div>
            </div>
            <div>
              <div className="nameCard text-sm font-semibold">
                <h3>
                  <span>
                    Monitor Gamer AOC 23.8" Full HD, 100Hz, 1ms, IPS,
                    DisplayPort...
                  </span>
                </h3>
              </div>
              <div className="availablePricesCard flex flex-col mt-3">
                <span className="oldPriceCard text-xs line-through text-gray-500">
                  R$&nbsp;777,77
                </span>
                <span className="priceCard text-orange-500 font-extrabold">
                  R$&nbsp;599,99
                </span>
                <span className="priceTextCard text-xs text-gray-500">
                  À vista no PIX
                </span>
              </div>
              <div style={{ height: "16px" }}></div>
            </div>
          </div>
        </a>
        <div>
          <div className="availableFooterCard">
            <div className="offerProductFooter flex items-center border border-orange-500 rounded-md mt-2">
              <div className="bg-orange-500 p-3">
                <FlashIcon />
              </div>
              <div className="flex items-center flex-col justify-center w-full text-orange-500 font-normal">
                TERMINA EM:
                <div>
                  <span className="countdownOffer font-bold">
                    15D 19 : 40 : 34
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
