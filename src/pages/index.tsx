/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import { colors, sizes } from '../data'
import BasketIcon from '../icons/bucket.svg'
import ArrowLeftIcon from '../icons/arrowLeft.svg'
import ArrowRightIcon from '../icons/arrowRight.svg'
import ShareIcon from '../icons/share.svg'
import FavouriteIcon from '../icons/favourite.svg'
import { useState } from 'react'
import clsx from 'clsx'

const Home: NextPage = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)

  const handleSizeSelect = (size: number) => {
    if (selectedSize === size) {
      return setSelectedSize(null)
    }
    setSelectedSize(size)
  }

  const renderCard = (outOfStock = false) => (
    <div className={clsx('card', outOfStock && 'card_out-of-stock')}>
      <div className={clsx('d-flex', 'justify-content-end', 'mg--r__2', 'pd--t__2 card_buttons-toggle')}>
        <button className="button mg--r__1">
          <ShareIcon />
        </button>
        <button className="button">
          <FavouriteIcon />
        </button>
      </div>
      <div className='badge mg--t__11'>
        $301.88
      </div>
      <span className="text mg--t__1 pd--b__3 mg--l__2">Soho Coat</span>
      <div className="card_toggle">
        <div className="items_slider align-items-c">
          <ArrowLeftIcon />
          <div className='wrapper'>
            {colors.map((itm, i) => (
              <div key={i} className={`circle mg--l__3 ${itm.color} ${i === colors.length - 1 ? 'mg--r__3' : ''}`} />
            ))}
          </div>
          <ArrowRightIcon />

        </div>
        <div className="items_slider pd--t__2 align-items-end">
          <div className='d-flex align-items-c'>
          <ArrowLeftIcon className="mg--r__3" />
          <div className={clsx('wrapper', selectedSize === null && 'wrapper_restrict')}>
            {sizes.map((itm, i) => (
              <div key={itm.id}
                onClick={() => handleSizeSelect(itm.id)}
                className={`size-round ${selectedSize === itm.id ? 'size-round_selected' : ''} ${i !== 0 ? 'mg--l__1' : ''}`
                }
              >
                <span>
                  {itm.size}
                </span>
              </div>
            ))}
          </div>
          <ArrowRightIcon className="mg--l__3" />
          </div>
          <button className={`mg--l__1 button button_card  ${selectedSize !== null ? 'hidden' : ''}`}>
            <BasketIcon />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="mg--l__10 mg--t__10 d-flex">
        {renderCard()}
        <div className='mg--l__6'>
          {renderCard(true)}
        </div>
      </div>
    </div>
  )
}

export default Home
