import {createStore} from "vuex";

export default createStore({
  devtools: true,
  state: {
    promotions: [
      {
        type: 'Percentage Off',
        sku: 'FUN-154_tsI',
        status: 'Expired',
        startDate: '2023-10-25T07:51:14.105Z',
        endDate: '2023-11-08T07:51:14.105Z',
        yourPrice: 613.79,
        discountPrice: 36.83,
        discountedPrice: 576.96,
        unitsSold: 458,
        soldAmount: 264247.68
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-508_FIT',
        status: 'Expired',
        startDate: '2023-11-02T07:51:14.106Z',
        endDate: '2023-11-04T07:51:14.106Z',
        yourPrice: 526.12,
        discountPrice: 99.96,
        discountedPrice: 426.16,
        unitsSold: 790,
        soldAmount: 336666.4
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-202_yib',
        status: 'In Effect',
        startDate: '2023-11-15T07:51:14.106Z',
        endDate: '2023-12-17T07:51:14.106Z',
        yourPrice: 707.58,
        discountPrice: 275.96,
        discountedPrice: 431.62,
        unitsSold: 416,
        soldAmount: 179553.92
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-580_Gzx',
        status: 'Starting Soon',
        startDate: '2023-12-03T07:51:14.106Z',
        endDate: '2023-12-10T07:51:14.106Z',
        yourPrice: 120.03,
        discountPrice: 49.21,
        discountedPrice: 70.82,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-396_ZPw',
        status: 'Starting Soon',
        startDate: '2023-11-24T07:51:14.106Z',
        endDate: '2024-01-03T07:51:14.106Z',
        yourPrice: 745.08,
        discountPrice: 149.02,
        discountedPrice: 596.06,
        unitsSold: 770,
        soldAmount: 458966.2
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-545_IpU',
        status: 'Starting Soon',
        startDate: '2023-12-14T07:51:14.106Z',
        endDate: '2024-01-07T07:51:14.106Z',
        yourPrice: 835,
        discountPrice: 325.65,
        discountedPrice: 509.35,
        unitsSold: 946,
        soldAmount: 481845.1
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-088_ops',
        status: 'Starting Soon',
        startDate: '2023-11-24T07:51:14.106Z',
        endDate: '2023-11-25T07:51:14.106Z',
        yourPrice: 745.26,
        discountPrice: 74.53,
        discountedPrice: 670.73,
        unitsSold: 236,
        soldAmount: 158292.28
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-989_ViB',
        status: 'Expired',
        startDate: '2023-10-24T07:51:14.106Z',
        endDate: '2023-11-15T07:51:14.106Z',
        yourPrice: 880.1,
        discountPrice: 369.64,
        discountedPrice: 510.46,
        unitsSold: 361,
        soldAmount: 184276.06
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-025_llq',
        status: 'Starting Soon',
        startDate: '2023-12-15T07:51:14.106Z',
        endDate: '2024-01-12T07:51:14.106Z',
        yourPrice: 425.23,
        discountPrice: 55.28,
        discountedPrice: 369.95,
        unitsSold: 620,
        soldAmount: 229369
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-971_xLX',
        status: 'In Effect',
        startDate: '2023-11-03T07:51:14.106Z',
        endDate: '2023-11-21T07:51:14.106Z',
        yourPrice: 848.96,
        discountPrice: 229.22,
        discountedPrice: 619.74,
        unitsSold: 914,
        soldAmount: 566442.36
      },
      {
        type: 'Coupon',
        sku: 'FUN-702_SKc',
        status: 'Starting Soon',
        startDate: '2023-12-05T07:51:14.106Z',
        endDate: '2023-12-30T07:51:14.106Z',
        yourPrice: 779.75,
        discountPrice: 62.38,
        discountedPrice: 717.37,
        unitsSold: 377,
        soldAmount: 270448.49
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-972_aOa',
        status: 'Starting Soon',
        startDate: '2023-12-12T07:51:14.106Z',
        endDate: '2024-01-13T07:51:14.106Z',
        yourPrice: 425.33,
        discountPrice: 12.76,
        discountedPrice: 412.57,
        unitsSold: 682,
        soldAmount: 281372.74
      },
      {
        type: 'Coupon',
        sku: 'FUN-831_ZjM',
        status: 'In Effect',
        startDate: '2023-11-10T07:51:14.106Z',
        endDate: '2023-12-06T07:51:14.106Z',
        yourPrice: 233.03,
        discountPrice: 58.26,
        discountedPrice: 174.77,
        unitsSold: 779,
        soldAmount: 136145.83
      },
      {
        type: 'Coupon',
        sku: 'FUN-031_SNe',
        status: 'Expired',
        startDate: '2023-10-24T07:51:14.106Z',
        endDate: '2023-11-15T07:51:14.106Z',
        yourPrice: 302.24,
        discountPrice: 72.54,
        discountedPrice: 229.7,
        unitsSold: 28,
        soldAmount: 6431.6
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-586_aUh',
        status: 'In Effect',
        startDate: '2023-10-30T07:51:14.106Z',
        endDate: '2023-12-11T07:51:14.106Z',
        yourPrice: 630.99,
        discountPrice: 170.37,
        discountedPrice: 460.62,
        unitsSold: 464,
        soldAmount: 213727.68
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-636_dpI',
        status: 'Starting Soon',
        startDate: '2023-12-04T07:51:14.106Z',
        endDate: '2023-12-05T07:51:14.106Z',
        yourPrice: 691.19,
        discountPrice: 311.04,
        discountedPrice: 380.15,
        unitsSold: 295,
        soldAmount: 112144.25
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-841_MAq',
        status: 'Expired',
        startDate: '2023-11-12T07:51:14.106Z',
        endDate: '2023-11-15T07:51:14.106Z',
        yourPrice: 642.77,
        discountPrice: 276.39,
        discountedPrice: 366.38,
        unitsSold: 309,
        soldAmount: 113211.42
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-764_yTX',
        status: 'Expired',
        startDate: '2023-10-29T07:51:14.106Z',
        endDate: '2023-11-15T07:51:14.106Z',
        yourPrice: 137.02,
        discountPrice: 60.29,
        discountedPrice: 76.73,
        unitsSold: 284,
        soldAmount: 21791.32
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-870_JBu',
        status: 'In Effect',
        startDate: '2023-11-21T07:51:14.106Z',
        endDate: '2023-12-08T07:51:14.106Z',
        yourPrice: 906.8,
        discountPrice: 154.16,
        discountedPrice: 752.64,
        unitsSold: 131,
        soldAmount: 98595.84
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-159_kOm',
        status: 'Starting Soon',
        startDate: '2023-11-22T07:51:14.106Z',
        endDate: '2023-12-14T07:51:14.106Z',
        yourPrice: 395.62,
        discountPrice: 102.86,
        discountedPrice: 292.76,
        unitsSold: 629,
        soldAmount: 184146.04
      },
      {
        type: 'Coupon',
        sku: 'FUN-202_rLE',
        status: 'Starting Soon',
        startDate: '2023-11-26T07:51:14.106Z',
        endDate: '2023-12-11T07:51:14.106Z',
        yourPrice: 186.23,
        discountPrice: 83.8,
        discountedPrice: 102.43,
        unitsSold: 897,
        soldAmount: 91879.71
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-873_PIY',
        status: 'In Effect',
        startDate: '2023-11-03T07:51:14.106Z',
        endDate: '2023-11-22T07:51:14.106Z',
        yourPrice: 945.03,
        discountPrice: 37.8,
        discountedPrice: 907.23,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-308_LGC',
        status: 'Starting Soon',
        startDate: '2023-12-19T07:51:14.106Z',
        endDate: '2024-01-14T07:51:14.106Z',
        yourPrice: 376.58,
        discountPrice: 139.33,
        discountedPrice: 237.25,
        unitsSold: 469,
        soldAmount: 111270.25
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-795_IeZ',
        status: 'Starting Soon',
        startDate: '2023-11-23T07:51:14.106Z',
        endDate: '2023-12-15T07:51:14.106Z',
        yourPrice: 35.69,
        discountPrice: 4.64,
        discountedPrice: 31.05,
        unitsSold: 532,
        soldAmount: 16518.6
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-917_dcX',
        status: 'In Effect',
        startDate: '2023-11-06T07:51:14.106Z',
        endDate: '2023-11-22T07:51:14.106Z',
        yourPrice: 671.32,
        discountPrice: 295.38,
        discountedPrice: 375.94,
        unitsSold: 903,
        soldAmount: 339473.82
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-006_Qpt',
        status: 'In Effect',
        startDate: '2023-11-17T07:51:14.106Z',
        endDate: '2023-11-30T07:51:14.106Z',
        yourPrice: 345.69,
        discountPrice: 114.08,
        discountedPrice: 231.61,
        unitsSold: 585,
        soldAmount: 135491.85
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-047_ocY',
        status: 'In Effect',
        startDate: '2023-11-14T07:51:14.106Z',
        endDate: '2023-11-29T07:51:14.106Z',
        yourPrice: 536.44,
        discountPrice: 0,
        discountedPrice: 536.44,
        unitsSold: 305,
        soldAmount: 163614.2
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-808_DkU',
        status: 'Expired',
        startDate: '2023-11-03T07:51:14.106Z',
        endDate: '2023-11-12T07:51:14.106Z',
        yourPrice: 495.42,
        discountPrice: 188.26,
        discountedPrice: 307.16,
        unitsSold: 947,
        soldAmount: 290880.52
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-145_qgL',
        status: 'Starting Soon',
        startDate: '2023-12-18T07:51:14.106Z',
        endDate: '2024-01-17T07:51:14.106Z',
        yourPrice: 911.4,
        discountPrice: 173.17,
        discountedPrice: 738.23,
        unitsSold: 334,
        soldAmount: 246568.82
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-106_Anb',
        status: 'Starting Soon',
        startDate: '2023-12-08T07:51:14.106Z',
        endDate: '2023-12-18T07:51:14.106Z',
        yourPrice: 498.56,
        discountPrice: 234.32,
        discountedPrice: 264.24,
        unitsSold: 75,
        soldAmount: 19818
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-266_IPk',
        status: 'In Effect',
        startDate: '2023-10-23T07:51:14.106Z',
        endDate: '2023-11-30T07:51:14.106Z',
        yourPrice: 538.27,
        discountPrice: 107.65,
        discountedPrice: 430.62,
        unitsSold: 557,
        soldAmount: 239855.34
      },
      {
        type: 'Coupon',
        sku: 'FUN-477_BDz',
        status: 'In Effect',
        startDate: '2023-11-17T07:51:14.106Z',
        endDate: '2023-12-21T07:51:14.106Z',
        yourPrice: 140.56,
        discountPrice: 37.95,
        discountedPrice: 102.61,
        unitsSold: 278,
        soldAmount: 28525.58
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-146_euM',
        status: 'Starting Soon',
        startDate: '2023-12-10T07:51:14.106Z',
        endDate: '2023-12-16T07:51:14.106Z',
        yourPrice: 336.78,
        discountPrice: 127.98,
        discountedPrice: 208.8,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Coupon',
        sku: 'FUN-700_VyB',
        status: 'Starting Soon',
        startDate: '2023-12-18T07:51:14.106Z',
        endDate: '2024-01-07T07:51:14.106Z',
        yourPrice: 138.07,
        discountPrice: 9.66,
        discountedPrice: 128.41,
        unitsSold: 161,
        soldAmount: 20674.01
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-163_QgM',
        status: 'In Effect',
        startDate: '2023-11-07T07:51:14.106Z',
        endDate: '2023-11-29T07:51:14.106Z',
        yourPrice: 413.01,
        discountPrice: 144.55,
        discountedPrice: 268.46,
        unitsSold: 968,
        soldAmount: 259869.28
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-760_YMG',
        status: 'In Effect',
        startDate: '2023-11-18T07:51:14.106Z',
        endDate: '2023-11-21T07:51:14.106Z',
        yourPrice: 575.41,
        discountPrice: 120.84,
        discountedPrice: 454.57,
        unitsSold: 977,
        soldAmount: 444114.89
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-929_fUi',
        status: 'In Effect',
        startDate: '2023-11-02T07:51:14.106Z',
        endDate: '2023-11-30T07:51:14.106Z',
        yourPrice: 943.73,
        discountPrice: 434.12,
        discountedPrice: 509.61,
        unitsSold: 844,
        soldAmount: 430110.84
      },
      {
        type: 'Coupon',
        sku: 'FUN-949_wCF',
        status: 'Expired',
        startDate: '2023-11-10T07:51:14.106Z',
        endDate: '2023-11-17T07:51:14.106Z',
        yourPrice: 80.72,
        discountPrice: 6.46,
        discountedPrice: 74.26,
        unitsSold: 396,
        soldAmount: 29406.96
      },
      {
        type: 'Coupon',
        sku: 'FUN-995_MgA',
        status: 'Starting Soon',
        startDate: '2023-12-01T07:51:14.106Z',
        endDate: '2024-01-12T07:51:14.106Z',
        yourPrice: 626.08,
        discountPrice: 50.09,
        discountedPrice: 575.99,
        unitsSold: 782,
        soldAmount: 450424.18
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-570_Dvp',
        status: 'Starting Soon',
        startDate: '2023-12-03T07:51:14.106Z',
        endDate: '2024-01-10T07:51:14.106Z',
        yourPrice: 599.52,
        discountPrice: 119.9,
        discountedPrice: 479.62,
        unitsSold: 674,
        soldAmount: 323263.88
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-819_GgI',
        status: 'Starting Soon',
        startDate: '2023-11-25T07:51:14.106Z',
        endDate: '2023-12-05T07:51:14.106Z',
        yourPrice: 256.27,
        discountPrice: 117.88,
        discountedPrice: 138.39,
        unitsSold: 415,
        soldAmount: 57431.85
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-452_clV',
        status: 'Starting Soon',
        startDate: '2023-12-12T07:51:14.106Z',
        endDate: '2024-01-12T07:51:14.106Z',
        yourPrice: 203.83,
        discountPrice: 30.57,
        discountedPrice: 173.26,
        unitsSold: 40,
        soldAmount: 6930.4
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-286_bEa',
        status: 'Starting Soon',
        startDate: '2023-12-04T07:51:14.106Z',
        endDate: '2023-12-11T07:51:14.106Z',
        yourPrice: 477.18,
        discountPrice: 128.84,
        discountedPrice: 348.34,
        unitsSold: 373,
        soldAmount: 129930.82
      },
      {
        type: 'Coupon',
        sku: 'FUN-504_YtE',
        status: 'In Effect',
        startDate: '2023-11-03T07:51:14.106Z',
        endDate: '2023-11-29T07:51:14.106Z',
        yourPrice: 736.47,
        discountPrice: 213.58,
        discountedPrice: 522.89,
        unitsSold: 117,
        soldAmount: 61178.13
      },
      {
        type: 'Coupon',
        sku: 'FUN-009_UEE',
        status: 'In Effect',
        startDate: '2023-10-31T07:51:14.106Z',
        endDate: '2023-12-11T07:51:14.106Z',
        yourPrice: 115.48,
        discountPrice: 15.01,
        discountedPrice: 100.47,
        unitsSold: 308,
        soldAmount: 30944.76
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-916_aGj',
        status: 'In Effect',
        startDate: '2023-11-20T07:51:14.106Z',
        endDate: '2023-12-03T07:51:14.106Z',
        yourPrice: 21.58,
        discountPrice: 3.88,
        discountedPrice: 17.7,
        unitsSold: 82,
        soldAmount: 1451.4
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-399_dco',
        status: 'Starting Soon',
        startDate: '2023-12-12T07:51:14.106Z',
        endDate: '2023-12-30T07:51:14.106Z',
        yourPrice: 494.51,
        discountPrice: 84.07,
        discountedPrice: 410.44,
        unitsSold: 677,
        soldAmount: 277867.88
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-308_AXu',
        status: 'In Effect',
        startDate: '2023-11-09T07:51:14.106Z',
        endDate: '2023-12-05T07:51:14.106Z',
        yourPrice: 358.11,
        discountPrice: 153.99,
        discountedPrice: 204.12,
        unitsSold: 688,
        soldAmount: 140434.56
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-310_KnP',
        status: 'Starting Soon',
        startDate: '2023-11-30T07:51:14.106Z',
        endDate: '2023-12-21T07:51:14.106Z',
        yourPrice: 914.42,
        discountPrice: 265.18,
        discountedPrice: 649.24,
        unitsSold: 48,
        soldAmount: 31163.52
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-654_DLx',
        status: 'Expired',
        startDate: '2023-10-28T07:51:14.106Z',
        endDate: '2023-11-02T07:51:14.106Z',
        yourPrice: 168.74,
        discountPrice: 13.5,
        discountedPrice: 155.24,
        unitsSold: 480,
        soldAmount: 74515.2
      },
      {
        type: 'Coupon',
        sku: 'FUN-695_zAm',
        status: 'Expired',
        startDate: '2023-10-25T07:51:14.107Z',
        endDate: '2023-11-12T07:51:14.107Z',
        yourPrice: 996.12,
        discountPrice: 219.15,
        discountedPrice: 776.97,
        unitsSold: 614,
        soldAmount: 477059.58
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-559_biN',
        status: 'Starting Soon',
        startDate: '2023-11-25T07:51:14.107Z',
        endDate: '2023-11-30T07:51:14.107Z',
        yourPrice: 229.36,
        discountPrice: 110.09,
        discountedPrice: 119.27,
        unitsSold: 711,
        soldAmount: 84800.97
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-870_vJY',
        status: 'Starting Soon',
        startDate: '2023-12-01T07:51:14.107Z',
        endDate: '2023-12-19T07:51:14.107Z',
        yourPrice: 627.72,
        discountPrice: 276.2,
        discountedPrice: 351.52,
        unitsSold: 738,
        soldAmount: 259421.76
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-490_Nmn',
        status: 'Starting Soon',
        startDate: '2023-11-29T07:51:14.107Z',
        endDate: '2023-12-12T07:51:14.107Z',
        yourPrice: 585.38,
        discountPrice: 0,
        discountedPrice: 585.38,
        unitsSold: 140,
        soldAmount: 81953.2
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-714_gmE',
        status: 'Starting Soon',
        startDate: '2023-12-12T07:51:14.107Z',
        endDate: '2023-12-30T07:51:14.107Z',
        yourPrice: 32.16,
        discountPrice: 11.26,
        discountedPrice: 20.9,
        unitsSold: 437,
        soldAmount: 9133.3
      },
      {
        type: 'Coupon',
        sku: 'FUN-978_zek',
        status: 'Expired',
        startDate: '2023-10-23T07:51:14.107Z',
        endDate: '2023-11-01T07:51:14.107Z',
        yourPrice: 736.81,
        discountPrice: 103.15,
        discountedPrice: 633.66,
        unitsSold: 821,
        soldAmount: 520234.86
      },
      {
        type: 'Coupon',
        sku: 'FUN-790_Ahv',
        status: 'Starting Soon',
        startDate: '2023-12-12T07:51:14.107Z',
        endDate: '2023-12-24T07:51:14.107Z',
        yourPrice: 447.32,
        discountPrice: 183.4,
        discountedPrice: 263.92,
        unitsSold: 669,
        soldAmount: 176562.48
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-576_rYT',
        status: 'In Effect',
        startDate: '2023-11-19T07:51:14.107Z',
        endDate: '2023-12-11T07:51:14.107Z',
        yourPrice: 670.4,
        discountPrice: 248.05,
        discountedPrice: 422.35,
        unitsSold: 863,
        soldAmount: 364488.05
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-595_bsj',
        status: 'In Effect',
        startDate: '2023-11-08T07:51:14.107Z',
        endDate: '2023-12-12T07:51:14.107Z',
        yourPrice: 78.76,
        discountPrice: 25.99,
        discountedPrice: 52.77,
        unitsSold: 653,
        soldAmount: 34458.81
      },
      {
        type: 'Coupon',
        sku: 'FUN-986_uaE',
        status: 'Starting Soon',
        startDate: '2023-12-17T07:51:14.107Z',
        endDate: '2024-01-18T07:51:14.107Z',
        yourPrice: 694.39,
        discountPrice: 298.59,
        discountedPrice: 395.8,
        unitsSold: 454,
        soldAmount: 179693.2
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-274_Kuw',
        status: 'Expired',
        startDate: '2023-11-01T07:51:14.107Z',
        endDate: '2023-11-19T07:51:14.107Z',
        yourPrice: 892.12,
        discountPrice: 35.68,
        discountedPrice: 856.44,
        unitsSold: 971,
        soldAmount: 831603.24
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-789_Hba',
        status: 'In Effect',
        startDate: '2023-11-14T07:51:14.107Z',
        endDate: '2023-12-21T07:51:14.107Z',
        yourPrice: 172.6,
        discountPrice: 50.05,
        discountedPrice: 122.55,
        unitsSold: 814,
        soldAmount: 99755.7
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-219_Wpg',
        status: 'Starting Soon',
        startDate: '2023-11-22T07:51:14.107Z',
        endDate: '2023-12-12T07:51:14.107Z',
        yourPrice: 355.72,
        discountPrice: 21.34,
        discountedPrice: 334.38,
        unitsSold: 298,
        soldAmount: 99645.24
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-854_Mky',
        status: 'Starting Soon',
        startDate: '2023-11-27T07:51:14.107Z',
        endDate: '2023-12-14T07:51:14.107Z',
        yourPrice: 281.04,
        discountPrice: 30.91,
        discountedPrice: 250.13,
        unitsSold: 106,
        soldAmount: 26513.78
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-526_czB',
        status: 'Starting Soon',
        startDate: '2023-11-27T07:51:14.107Z',
        endDate: '2024-01-10T07:51:14.107Z',
        yourPrice: 279.78,
        discountPrice: 25.18,
        discountedPrice: 254.6,
        unitsSold: 25,
        soldAmount: 6365
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-335_POa',
        status: 'In Effect',
        startDate: '2023-11-01T07:51:14.107Z',
        endDate: '2023-11-24T07:51:14.107Z',
        yourPrice: 321.03,
        discountPrice: 93.1,
        discountedPrice: 227.93,
        unitsSold: 739,
        soldAmount: 168440.27
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-056_Isj',
        status: 'Expired',
        startDate: '2023-10-23T07:51:14.107Z',
        endDate: '2023-11-17T07:51:14.107Z',
        yourPrice: 88.05,
        discountPrice: 24.65,
        discountedPrice: 63.4,
        unitsSold: 831,
        soldAmount: 52685.4
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-602_zNp',
        status: 'Expired',
        startDate: '2023-10-23T07:51:14.107Z',
        endDate: '2023-11-18T07:51:14.107Z',
        yourPrice: 241.74,
        discountPrice: 113.62,
        discountedPrice: 128.12,
        unitsSold: 31,
        soldAmount: 3971.72
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-758_Rry',
        status: 'In Effect',
        startDate: '2023-10-27T07:51:14.107Z',
        endDate: '2023-12-07T07:51:14.107Z',
        yourPrice: 900.95,
        discountPrice: 351.37,
        discountedPrice: 549.58,
        unitsSold: 284,
        soldAmount: 156080.72
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-569_mHF',
        status: 'Starting Soon',
        startDate: '2023-12-15T07:51:14.107Z',
        endDate: '2023-12-22T07:51:14.107Z',
        yourPrice: 927.04,
        discountPrice: 120.52,
        discountedPrice: 806.52,
        unitsSold: 286,
        soldAmount: 230664.72
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-486_otC',
        status: 'In Effect',
        startDate: '2023-11-02T07:51:14.107Z',
        endDate: '2023-12-14T07:51:14.107Z',
        yourPrice: 260.94,
        discountPrice: 78.28,
        discountedPrice: 182.66,
        unitsSold: 786,
        soldAmount: 143570.76
      },
      {
        type: 'Coupon',
        sku: 'FUN-779_MQL',
        status: 'Starting Soon',
        startDate: '2023-12-06T07:51:14.107Z',
        endDate: '2023-12-08T07:51:14.107Z',
        yourPrice: 339,
        discountPrice: 111.87,
        discountedPrice: 227.13,
        unitsSold: 460,
        soldAmount: 104479.8
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-579_gIk',
        status: 'Expired',
        startDate: '2023-10-30T07:51:14.107Z',
        endDate: '2023-10-30T07:51:14.107Z',
        yourPrice: 42.1,
        discountPrice: 20.21,
        discountedPrice: 21.89,
        unitsSold: 108,
        soldAmount: 2364.12
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-843_nZP',
        status: 'In Effect',
        startDate: '2023-11-10T07:51:14.107Z',
        endDate: '2023-12-05T07:51:14.107Z',
        yourPrice: 852.84,
        discountPrice: 213.21,
        discountedPrice: 639.63,
        unitsSold: 931,
        soldAmount: 595495.53
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-876_OCk',
        status: 'Starting Soon',
        startDate: '2023-12-13T07:51:14.107Z',
        endDate: '2023-12-20T07:51:14.107Z',
        yourPrice: 784.53,
        discountPrice: 39.23,
        discountedPrice: 745.3,
        unitsSold: 605,
        soldAmount: 450906.5
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-042_frJ',
        status: 'Starting Soon',
        startDate: '2023-11-26T07:51:14.107Z',
        endDate: '2024-01-09T07:51:14.107Z',
        yourPrice: 992.86,
        discountPrice: 327.64,
        discountedPrice: 665.22,
        unitsSold: 807,
        soldAmount: 536832.54
      },
      {
        type: 'Coupon',
        sku: 'FUN-108_boT',
        status: 'Starting Soon',
        startDate: '2023-11-25T07:51:14.107Z',
        endDate: '2023-12-05T07:51:14.107Z',
        yourPrice: 129.64,
        discountPrice: 32.41,
        discountedPrice: 97.23,
        unitsSold: 16,
        soldAmount: 1555.68
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-766_blY',
        status: 'Starting Soon',
        startDate: '2023-11-25T07:51:14.107Z',
        endDate: '2023-12-10T07:51:14.107Z',
        yourPrice: 559.4,
        discountPrice: 212.57,
        discountedPrice: 346.83,
        unitsSold: 416,
        soldAmount: 144281.28
      },
      {
        type: 'Coupon',
        sku: 'FUN-585_rZy',
        status: 'Starting Soon',
        startDate: '2023-12-18T07:51:14.107Z',
        endDate: '2024-01-17T07:51:14.107Z',
        yourPrice: 681.98,
        discountPrice: 75.02,
        discountedPrice: 606.96,
        unitsSold: 746,
        soldAmount: 452792.16
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-994_LFM',
        status: 'Starting Soon',
        startDate: '2023-12-08T07:51:14.107Z',
        endDate: '2024-01-14T07:51:14.107Z',
        yourPrice: 383.56,
        discountPrice: 46.03,
        discountedPrice: 337.53,
        unitsSold: 58,
        soldAmount: 19576.74
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-134_hGV',
        status: 'In Effect',
        startDate: '2023-11-10T07:51:14.107Z',
        endDate: '2023-12-19T07:51:14.107Z',
        yourPrice: 59.94,
        discountPrice: 19.78,
        discountedPrice: 40.16,
        unitsSold: 374,
        soldAmount: 15019.84
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-255_Mbm',
        status: 'In Effect',
        startDate: '2023-11-18T07:51:14.107Z',
        endDate: '2023-11-21T07:51:14.107Z',
        yourPrice: 570.64,
        discountPrice: 188.31,
        discountedPrice: 382.33,
        unitsSold: 61,
        soldAmount: 23322.13
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-025_zuJ',
        status: 'In Effect',
        startDate: '2023-11-20T07:51:14.107Z',
        endDate: '2023-12-03T07:51:14.107Z',
        yourPrice: 24.05,
        discountPrice: 9.38,
        discountedPrice: 14.67,
        unitsSold: 254,
        soldAmount: 3726.18
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-228_ytD',
        status: 'In Effect',
        startDate: '2023-10-28T07:51:14.107Z',
        endDate: '2023-12-01T07:51:14.107Z',
        yourPrice: 704.29,
        discountPrice: 183.12,
        discountedPrice: 521.17,
        unitsSold: 892,
        soldAmount: 464883.64
      },
      {
        type: 'Exclusive Discounts',
        sku: 'FUN-902_tfg',
        status: 'Starting Soon',
        startDate: '2023-11-26T07:51:14.107Z',
        endDate: '2024-01-06T07:51:14.107Z',
        yourPrice: 244.47,
        discountPrice: 48.89,
        discountedPrice: 195.58,
        unitsSold: 811,
        soldAmount: 158615.38
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-292_UXV',
        status: 'Starting Soon',
        startDate: '2023-12-06T07:51:14.107Z',
        endDate: '2023-12-30T07:51:14.107Z',
        yourPrice: 504.14,
        discountPrice: 40.33,
        discountedPrice: 463.81,
        unitsSold: 361,
        soldAmount: 167435.41
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-868_sSI',
        status: 'Expired',
        startDate: '2023-10-27T07:51:14.107Z',
        endDate: '2023-11-02T07:51:14.107Z',
        yourPrice: 300.08,
        discountPrice: 105.03,
        discountedPrice: 195.05,
        unitsSold: 199,
        soldAmount: 38814.95
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-701_wNy',
        status: 'In Effect',
        startDate: '2023-11-08T07:51:14.107Z',
        endDate: '2023-12-22T07:51:14.107Z',
        yourPrice: 186.41,
        discountPrice: 76.43,
        discountedPrice: 109.98,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-357_WOD',
        status: 'Starting Soon',
        startDate: '2023-12-05T07:51:14.107Z',
        endDate: '2023-12-17T07:51:14.107Z',
        yourPrice: 294.96,
        discountPrice: 100.29,
        discountedPrice: 194.67,
        unitsSold: 582,
        soldAmount: 113297.94
      },
      {
        type: 'Coupon',
        sku: 'FUN-573_VUc',
        status: 'Starting Soon',
        startDate: '2023-12-04T07:51:14.107Z',
        endDate: '2024-01-08T07:51:14.107Z',
        yourPrice: 354.76,
        discountPrice: 166.74,
        discountedPrice: 188.02,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-956_SoV',
        status: 'Starting Soon',
        startDate: '2023-12-19T07:51:14.107Z',
        endDate: '2024-01-09T07:51:14.107Z',
        yourPrice: 126.46,
        discountPrice: 25.29,
        discountedPrice: 101.17,
        unitsSold: 116,
        soldAmount: 11735.72
      },
      {
        type: 'Coupon',
        sku: 'FUN-386_waa',
        status: 'Starting Soon',
        startDate: '2023-12-19T07:51:14.107Z',
        endDate: '2024-01-14T07:51:14.107Z',
        yourPrice: 249.31,
        discountPrice: 114.68,
        discountedPrice: 134.63,
        unitsSold: 922,
        soldAmount: 124128.86
      },
      {
        type: 'Coupon',
        sku: 'FUN-508_geu',
        status: 'In Effect',
        startDate: '2023-10-31T07:51:14.107Z',
        endDate: '2023-12-08T07:51:14.107Z',
        yourPrice: 660.36,
        discountPrice: 59.43,
        discountedPrice: 600.93,
        unitsSold: 28,
        soldAmount: 16826.04
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-882_Oxh',
        status: 'Starting Soon',
        startDate: '2023-11-27T07:51:14.107Z',
        endDate: '2023-12-23T07:51:14.107Z',
        yourPrice: 225.66,
        discountPrice: 9.03,
        discountedPrice: 216.63,
        unitsSold: 255,
        soldAmount: 55240.65
      },
      {
        type: 'Coupon',
        sku: 'FUN-668_LIz',
        status: 'Starting Soon',
        startDate: '2023-11-23T07:51:14.107Z',
        endDate: '2023-12-11T07:51:14.107Z',
        yourPrice: 659.75,
        discountPrice: 197.93,
        discountedPrice: 461.82,
        unitsSold: 819,
        soldAmount: 378230.58
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-026_lLg',
        status: 'Starting Soon',
        startDate: '2023-12-11T07:51:14.107Z',
        endDate: '2024-01-21T07:51:14.107Z',
        yourPrice: 574.7,
        discountPrice: 275.86,
        discountedPrice: 298.84,
        unitsSold: 300,
        soldAmount: 89652
      },
      {
        type: 'Percentage Off',
        sku: 'FUN-864_ntm',
        status: 'Starting Soon',
        startDate: '2023-12-20T07:51:14.107Z',
        endDate: '2024-01-17T07:51:14.107Z',
        yourPrice: 277.05,
        discountPrice: 66.49,
        discountedPrice: 210.56,
        unitsSold: 0,
        soldAmount: 0
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-494_yFH',
        status: 'Expired',
        startDate: '2023-11-11T07:51:14.107Z',
        endDate: '2023-11-15T07:51:14.107Z',
        yourPrice: 989.99,
        discountPrice: 346.5,
        discountedPrice: 643.49,
        unitsSold: 924,
        soldAmount: 594584.76
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-205_paq',
        status: 'Expired',
        startDate: '2023-11-04T07:51:14.107Z',
        endDate: '2023-11-11T07:51:14.107Z',
        yourPrice: 430.18,
        discountPrice: 154.86,
        discountedPrice: 275.32,
        unitsSold: 260,
        soldAmount: 71583.2
      },
      {
        type: 'Buy One Get One',
        sku: 'FUN-202_GjN',
        status: 'Starting Soon',
        startDate: '2023-11-23T07:51:14.107Z',
        endDate: '2024-01-06T07:51:14.107Z',
        yourPrice: 156.61,
        discountPrice: 6.26,
        discountedPrice: 150.35,
        unitsSold: 738,
        soldAmount: 110958.3
      }
    ]
  },
  getters: {
    getPromotions: (state) => state.promotions
  }
});
