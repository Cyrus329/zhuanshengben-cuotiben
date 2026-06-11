const STORAGE_KEY = "word-memory-trainer:v1";
const SETTINGS_KEY = "word-memory-trainer:settings:v1";
const REVIEW_STEPS = [
  { label: "20分钟", ms: 20 * 60 * 1000 },
  { label: "1小时", ms: 60 * 60 * 1000 },
  { label: "9小时", ms: 9 * 60 * 60 * 1000 },
  { label: "1天", ms: 24 * 60 * 60 * 1000 },
  { label: "2天", ms: 2 * 24 * 60 * 60 * 1000 },
  { label: "6天", ms: 6 * 24 * 60 * 60 * 1000 },
  { label: "31天", ms: 31 * 24 * 60 * 60 * 1000 },
];
const PROGRESS_MODES = ["card", "enToZh", "zhToEn", "phrase", "spell", "dictation", "forms"];
const PROGRESS_MODE_LABELS = {
  card: "卡片",
  enToZh: "英译中",
  zhToEn: "中译英",
  phrase: "搭配填空",
  spell: "拼写",
  dictation: "听写",
  forms: "变形",
};
const MODE_PROGRESS_HINT = "各模式独立进度";

const BUILTIN_PACKAGE_KEY = "word-memory-trainer:word-list-1-2-3-4-5:v5";
const BUILTIN_WORDS = [
  {
    "id": "word-list-1-001",
    "term": "shop",
    "meaning": "n. 商店；店铺；v. 去商店买；在商店购物",
    "phrase": "go shopping 购物",
    "note": "/ʃɑ:p/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-002",
    "term": "go shopping",
    "meaning": "购物",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-003",
    "term": "store",
    "meaning": "n. 商店；店铺；备用物；仓库；v. 保存；记忆",
    "phrase": "convenience store 便利店",
    "note": "/stɔ:r/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-004",
    "term": "convenience store",
    "meaning": "便利店",
    "phrase": "",
    "note": "拓展短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-005",
    "term": "restore",
    "meaning": "v. 恢复；修复；使复原",
    "phrase": "",
    "note": "/rɪˈstɔ:r/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-006",
    "term": "clerk",
    "meaning": "n. 职员；档案管理员",
    "phrase": "",
    "note": "/klɜ:rk/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-007",
    "term": "business",
    "meaning": "n. 商业；买卖；生意",
    "phrase": "on business 出差；none of your business 不关你的事；E-business 电子商务",
    "note": "/ˈbɪznəs/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-008",
    "term": "on business",
    "meaning": "出差",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-009",
    "term": "none of your business",
    "meaning": "不关你的事",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-010",
    "term": "E-business",
    "meaning": "电子商务",
    "phrase": "",
    "note": "拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-011",
    "term": "stock",
    "meaning": "n. 库存；存货；资本；种类；v. 备有；存有；摆满；供应；adj. 存货的",
    "phrase": "in stock 有现货；out of stock 缺货",
    "note": "/stɑ:k/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-012",
    "term": "in stock",
    "meaning": "有现货",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-013",
    "term": "out of stock",
    "meaning": "缺货",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-014",
    "term": "price",
    "meaning": "n. 价格；物价；代价；v. 给……定价",
    "phrase": "at any price 不惜任何代价；无论如何；price list 价目表；original price 原价；at a high/low/reasonable price 以很高、很低、合理的价格",
    "note": "/praɪs/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-015",
    "term": "at any price",
    "meaning": "不惜任何代价；无论如何",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-016",
    "term": "price list",
    "meaning": "价目表",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-017",
    "term": "priceless",
    "meaning": "adj. 无价的；非常珍贵的",
    "phrase": "",
    "note": "/ˈpraɪsləs/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-018",
    "term": "discount",
    "meaning": "n. 折扣；v. 打折扣",
    "phrase": "",
    "note": "/ˈdɪskaʊnt/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-019",
    "term": "dollar",
    "meaning": "n. 美元",
    "phrase": "",
    "note": "/ˈdɑ:lər/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-020",
    "term": "credit",
    "meaning": "n. 信用；信贷；学分；赞扬；可信性",
    "phrase": "credit card 信用卡；to one's credit 值得赞扬的是……",
    "note": "/ˈkredɪt/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-021",
    "term": "credit card",
    "meaning": "信用卡",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-022",
    "term": "to one's credit",
    "meaning": "值得赞扬的是……",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-023",
    "term": "cash",
    "meaning": "n. 钱；现金；v. 将……兑换成现金；支付现款",
    "phrase": "in cash 用现金",
    "note": "/kæʃ/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-024",
    "term": "in cash",
    "meaning": "用现金",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-025",
    "term": "cheque",
    "meaning": "n. 支票",
    "phrase": "",
    "note": "/tʃek/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-026",
    "term": "online",
    "meaning": "adj. 在线的；联网的；联机的；adv. 在网上地；在线地",
    "phrase": "online shopping 线上购物；online paying 线上支付",
    "note": "/ˌɑ:nˈlaɪn/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-027",
    "term": "online shopping",
    "meaning": "线上购物",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-028",
    "term": "online paying",
    "meaning": "线上支付",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-029",
    "term": "offline",
    "meaning": "adj. （计算机）未联网的；不在线的",
    "phrase": "",
    "note": "/ˌɔfˈlaɪn/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-030",
    "term": "buy",
    "meaning": "v. 买；购买",
    "phrase": "",
    "note": "/baɪ/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-031",
    "term": "sell",
    "meaning": "v. 卖；出售",
    "phrase": "for sale 售卖中；待售；on sale 供出售；上市；特价销售；sell well 卖得好",
    "note": "/sel/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-032",
    "term": "sale",
    "meaning": "n. 卖；出售",
    "phrase": "",
    "note": "/seɪl/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-033",
    "term": "for sale",
    "meaning": "售卖中；待售",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-034",
    "term": "on sale",
    "meaning": "供出售；上市；特价销售",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-035",
    "term": "salesman",
    "meaning": "n. 售货员；营业员",
    "phrase": "",
    "note": "/ˈseɪlzmən/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-036",
    "term": "consume",
    "meaning": "v. 消费；用完；耗尽",
    "phrase": "",
    "note": "/kənˈsu:m/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-037",
    "term": "consumer",
    "meaning": "n. 消费者；用户；顾客",
    "phrase": "",
    "note": "/kənˈsu:mər/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-038",
    "term": "consumption",
    "meaning": "n. 耗尽；消耗",
    "phrase": "",
    "note": "/kənˈsʌmpʃn/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-039",
    "term": "purchase",
    "meaning": "v. 购买；采购；n. 购买；采购",
    "phrase": "",
    "note": "/ˈpɜ:rtʃəs/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-040",
    "term": "tradition",
    "meaning": "n. 传统；传统风俗",
    "phrase": "",
    "note": "/trəˈdɪʃn/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-041",
    "term": "traditional",
    "meaning": "adj. 传统的",
    "phrase": "",
    "note": "/trəˈdɪʃənl/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-042",
    "term": "custom",
    "meaning": "n. 风俗；习俗；光顾；习惯",
    "phrase": "",
    "note": "/ˈkʌstəm/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-043",
    "term": "customer",
    "meaning": "n. 顾客；客户",
    "phrase": "",
    "note": "/ˈkʌstəmər/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-044",
    "term": "costume",
    "meaning": "n. 服饰；装束",
    "phrase": "",
    "note": "/ˈkɑstju:m/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-045",
    "term": "bargain",
    "meaning": "n. 协定；协议；便宜的东西；v. 讨价还价；谈判",
    "phrase": "",
    "note": "/ˈbɑ:rgən/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-046",
    "term": "cheap",
    "meaning": "adj. 便宜的；无价值的；adv. 便宜地",
    "phrase": "The hat is cheap. 帽子很便宜。",
    "note": "/tʃi:p/；cheap 不用于修饰 price；修饰价格要用 high/low/reasonable",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-047",
    "term": "expend",
    "meaning": "v. 支出；花费",
    "phrase": "",
    "note": "/ɪkˈspend/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-048",
    "term": "expense",
    "meaning": "n. 代价；价钱；费用；v. 把……记入费用账户",
    "phrase": "at the expense of 以……为代价",
    "note": "/ɪkˈspens/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-049",
    "term": "at the expense of",
    "meaning": "以……为代价",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-050",
    "term": "expensive",
    "meaning": "adj. 花钱多的；昂贵的",
    "phrase": "",
    "note": "/ɪkˈspensɪv/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-051",
    "term": "expenditure",
    "meaning": "n. 支出；消费；花费",
    "phrase": "",
    "note": "/ɪkˈspendɪtʃər/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-052",
    "term": "dispensable",
    "meaning": "adj. 不必要的",
    "phrase": "",
    "note": "/dɪˈspensəbl/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-053",
    "term": "indispensable",
    "meaning": "adj. 必不可少的；不可或缺的；必需的",
    "phrase": "",
    "note": "/ˌɪndɪˈspensəbl/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-054",
    "term": "spend",
    "meaning": "v. 花费；度过",
    "phrase": "spend time/money on something；spend time/money in doing something",
    "note": "/spend/；in 可以省略",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-055",
    "term": "spend on",
    "meaning": "在某事上花费时间/金钱",
    "phrase": "",
    "note": "用法：spend time/money on something",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-056",
    "term": "spend...in doing",
    "meaning": "花费时间/金钱做某事",
    "phrase": "",
    "note": "用法：spend time/money in doing something",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-057",
    "term": "cost",
    "meaning": "v. 成本为；价格为；使付出……的代价；n. 价格；成本；代价",
    "phrase": "at all costs 无论如何；at the cost of 以……为代价",
    "note": "/kɔ:st/；cost 作动词时常用主动形式表被动意义，主语通常是事物",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-058",
    "term": "at all costs",
    "meaning": "无论如何",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-059",
    "term": "at the cost of",
    "meaning": "以……为代价",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-060",
    "term": "costly",
    "meaning": "adj. 贵重的；昂贵的",
    "phrase": "",
    "note": "/ˈkɔ:stli/；拓展词",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-061",
    "term": "take",
    "meaning": "v. 携带；拿走；带去；花费；占用（时间）",
    "phrase": "It takes/took + 时间 + to do sth.",
    "note": "/teɪk/",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-1-062",
    "term": "It takes/took + time + to do sth.",
    "meaning": "做某事花费多少时间",
    "phrase": "",
    "note": "it 作形式主语，真正的主语为后面的 to do",
    "tag": "Word List 1 / 购物商务",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-07T18:01:16",
    "updatedAt": "2026-06-07T18:01:16",
    "history": []
  },
  {
    "id": "word-list-2-001",
    "term": "know",
    "meaning": "v. 知道；了解；认识到",
    "phrase": "as far as I know 就我所知",
    "note": "/nou/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-002",
    "term": "as far as I know",
    "meaning": "就我所知",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-003",
    "term": "unknown",
    "meaning": "adj. 不知道的；不熟悉的",
    "phrase": "",
    "note": "/ˌʌnˈnoʊn/；拓展词",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-004",
    "term": "see",
    "meaning": "v. 看见；弄清；了解",
    "phrase": "see sb. off 为某人送别",
    "note": "/si:/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-005",
    "term": "see sb. off",
    "meaning": "为某人送别",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-006",
    "term": "feel",
    "meaning": "v. 感觉；体会到；摸起来；以为；n. 触觉；手感；触摸；印象",
    "phrase": "feel at home 舒适自在；feel free to do sth. （请）随便做某事",
    "note": "/fi:l/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-007",
    "term": "feel at home",
    "meaning": "舒适自在",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-008",
    "term": "feel free to do sth.",
    "meaning": "（请）随便做某事",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-009",
    "term": "feeling",
    "meaning": "n. 感觉；看法；想法",
    "phrase": "",
    "note": "/'fi:liŋ/；拓展词",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-010",
    "term": "smell",
    "meaning": "n. 气味；嗅觉；臭味；v. 有（或发出）……气味；闻到",
    "phrase": "",
    "note": "/smel/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-011",
    "term": "taste",
    "meaning": "n. 味道；滋味；口味；v. 品尝……的味道；体验；尝起来",
    "phrase": "",
    "note": "/teɪst/；taste 作系动词表示“有……味道”，不用进行时或被动语态，后面接表语。误：The meat is tasted/tasting well. 正：The meat tastes good.",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-012",
    "term": "sound",
    "meaning": "n. 声音；意味；无线电广播；v. 发出声音；探测；adj. 没有受伤的；健康的",
    "phrase": "",
    "note": "/saʊnd/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-013",
    "term": "listen",
    "meaning": "v. 听；收听；听从；n. 听；倾听",
    "phrase": "listen to 倾听；聆听",
    "note": "/'lisn/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-014",
    "term": "listen to",
    "meaning": "倾听；聆听",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-015",
    "term": "hear",
    "meaning": "v. 听见；听到",
    "phrase": "",
    "note": "/hɪr/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-016",
    "term": "voice",
    "meaning": "n. 说话声；嗓音",
    "phrase": "",
    "note": "/vɔɪs/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-017",
    "term": "speak",
    "meaning": "v. 谈话；交谈；说；讲述；（会）讲（某种语言）；发言，演讲",
    "phrase": "",
    "note": "/spi:k/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-018",
    "term": "aloud",
    "meaning": "adv. 出声地；能听见地；大声地",
    "phrase": "",
    "note": "/ə'laʊd/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-019",
    "term": "loudly",
    "meaning": "adv. 大声地；响亮地",
    "phrase": "",
    "note": "/'laʊdli/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-020",
    "term": "speech",
    "meaning": "n. 说话；言语；演说",
    "phrase": "",
    "note": "/spi:tʃ/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-021",
    "term": "lecture",
    "meaning": "n. 讲座；讲课；v. 讲课；做讲座",
    "phrase": "give a lecture 讲课；演讲",
    "note": "/'lektʃər/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-022",
    "term": "give a lecture",
    "meaning": "讲课；演讲",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-023",
    "term": "talk",
    "meaning": "v. 说话；交谈；谈话；谈判，商讨；n. 交谈；讨论",
    "phrase": "",
    "note": "/tɔ:k/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-024",
    "term": "tell",
    "meaning": "v. 告诉；识别；说明",
    "phrase": "tell apart 区分；区别",
    "note": "/tel/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-025",
    "term": "tell apart",
    "meaning": "区分；区别",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-026",
    "term": "retell",
    "meaning": "v. 再讲；复述",
    "phrase": "",
    "note": "/ˌri:'tel/；拓展词",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-027",
    "term": "story",
    "meaning": "n. 故事；传说；叙述",
    "phrase": "tell a story 讲故事；tell stories 讲故事",
    "note": "/'stɔ:ri/；“讲故事”用 tell a story 或 tell stories，不能用 speak.",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-028",
    "term": "tell a story",
    "meaning": "讲故事",
    "phrase": "tell stories 讲故事",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-029",
    "term": "read",
    "meaning": "v. 阅读；读懂；朗读；（在书籍、报纸等中）读到，看到；解读；看透（想法或心思）",
    "phrase": "",
    "note": "/ri:d/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-030",
    "term": "reader",
    "meaning": "n. 读者；爱读书的人",
    "phrase": "",
    "note": "/'ri:də(r)/；拓展词",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-031",
    "term": "say",
    "meaning": "v. 说，讲；宣称，说明；认为，据说；n. 发言权，决定权",
    "phrase": "",
    "note": "/seɪ/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-032",
    "term": "article",
    "meaning": "n. 一件；物件；文章",
    "phrase": "",
    "note": "/'ɑ:rtɪkl/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-033",
    "term": "text",
    "meaning": "n. 文本；文章；正文；v. 给（某人）发短信",
    "phrase": "",
    "note": "/tekst/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-034",
    "term": "context",
    "meaning": "n. 上下文；语境",
    "phrase": "",
    "note": "/'kɒntekst/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-035",
    "term": "passage",
    "meaning": "n. 通道；走廊；章节；段落",
    "phrase": "",
    "note": "/'pæsɪdʒ/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-036",
    "term": "chapter",
    "meaning": "n. 章；回",
    "phrase": "",
    "note": "/'tʃæptər/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-037",
    "term": "paragraph",
    "meaning": "n. 段落；节；v. 把……分段",
    "phrase": "",
    "note": "/'pærəgræf/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-038",
    "term": "news",
    "meaning": "n. 新闻；消息",
    "phrase": "",
    "note": "/nu:z/；news 是不可数名词，表示“一则新闻；一则消息”要用 a piece of news.",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-039",
    "term": "a piece of news",
    "meaning": "一则新闻；一则消息",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-040",
    "term": "newspaper",
    "meaning": "n. 报纸",
    "phrase": "",
    "note": "/'nu:zpeɪpə(r)/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-041",
    "term": "message",
    "meaning": "n. 口信；消息；信息",
    "phrase": "leave a message 留话；留个信息；text message 文本消息；发短信",
    "note": "/'mesɪdʒ/",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-042",
    "term": "leave a message",
    "meaning": "留话；留个信息",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-2-043",
    "term": "text message",
    "meaning": "文本消息；发短信",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 2 / 感官与语言交流",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-08T10:44:42",
    "updatedAt": "2026-06-08T10:44:42",
    "history": []
  },
  {
    "id": "word-list-3-001",
    "term": "ball",
    "meaning": "n. 球；球类运动；舞会",
    "phrase": "",
    "note": "/bɔ:l/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-002",
    "term": "skate",
    "meaning": "n. 冰鞋；v. 滑冰；溜冰",
    "phrase": "",
    "note": "/skeɪt/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-003",
    "term": "skill",
    "meaning": "n. 技巧；技艺；v. 培训（工人）",
    "phrase": "special skill 特殊技能，特长；social skill 社交技能；professional skill 专业技能",
    "note": "/skil/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-004",
    "term": "special skill",
    "meaning": "特殊技能；特长",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-005",
    "term": "social skill",
    "meaning": "社交技能",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-006",
    "term": "professional skill",
    "meaning": "专业技能",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-007",
    "term": "able",
    "meaning": "adj. 能够的",
    "phrase": "be able to do sth. 能够",
    "note": "/'eɪbl/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-008",
    "term": "be able to do sth.",
    "meaning": "能够",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-009",
    "term": "ability",
    "meaning": "n. 能力；才能；本领",
    "phrase": "",
    "note": "/ə'biləti/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-010",
    "term": "disable",
    "meaning": "v. 使丧失能力；使伤残",
    "phrase": "",
    "note": "/dis'eɪbl/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-011",
    "term": "unable",
    "meaning": "adj. 不能胜任的",
    "phrase": "",
    "note": "/ʌn'eɪbl/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-012",
    "term": "enjoy",
    "meaning": "v. 享受；欣赏；喜爱",
    "phrase": "enjoy doing sth. 喜欢做某事",
    "note": "/ɪn'dʒɔɪ/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-013",
    "term": "enjoy doing sth.",
    "meaning": "喜欢做某事",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-014",
    "term": "enjoyable",
    "meaning": "adj. 令人愉快的",
    "phrase": "",
    "note": "/ɪn'dʒɔɪəbl/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-015",
    "term": "grass",
    "meaning": "n. 草；草地；草坪；v. （向警方）告密；告发",
    "phrase": "",
    "note": "/grɑ:s/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-016",
    "term": "afraid",
    "meaning": "adj. 害怕的；焦虑的",
    "phrase": "be afraid of 害怕；恐惧",
    "note": "/ə'freɪd/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-017",
    "term": "be afraid of",
    "meaning": "害怕；恐惧",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-018",
    "term": "water",
    "meaning": "n. 水；水域；v. 给……浇水；灌溉",
    "phrase": "",
    "note": "/'wɔ:tər/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-019",
    "term": "old",
    "meaning": "adj. 古老的；老的；n. 老年人；旧事物",
    "phrase": "",
    "note": "/oʊld/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-020",
    "term": "elder",
    "meaning": "adj. 年龄较大的；较老的",
    "phrase": "",
    "note": "/'eldər/；elder 是 old 的比较级。指家庭成员中年龄较长的，或指两人中年龄较长的。older 也是 old 的比较级，指年龄较大、较老，指物时意为“较旧的”。",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-021",
    "term": "young",
    "meaning": "adj. 幼小的；年轻的；n. 年轻人；青年人；幼崽；幼兽",
    "phrase": "",
    "note": "/jʌŋ/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-022",
    "term": "youth",
    "meaning": "n. 青（少）年时代；青春时期",
    "phrase": "",
    "note": "/ju:θ/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-023",
    "term": "youngster",
    "meaning": "n. 青少年；年轻人",
    "phrase": "",
    "note": "/'jʌŋstə/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-024",
    "term": "junior",
    "meaning": "adj. 年少的；地位低的；初级的；n. 年少者；晚辈",
    "phrase": "",
    "note": "/'dʒu:niər/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-025",
    "term": "senior",
    "meaning": "adj. 较年长的；高级的；高职的",
    "phrase": "",
    "note": "/'si:niər/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-026",
    "term": "live",
    "meaning": "v. 居住；活着；生存；adj. 活的；现场直播的；adv. 现场直播地",
    "phrase": "live up to 遵守（诺言）；不辜负（期望）；live on 以……为食",
    "note": "/lɪv, laɪv/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-027",
    "term": "live up to",
    "meaning": "遵守（诺言）；不辜负（期望）",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-028",
    "term": "live on",
    "meaning": "以……为食",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-029",
    "term": "lively",
    "meaning": "adj. 充满活力的；活泼外向的；敏锐的",
    "phrase": "",
    "note": "/'laɪvli/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-030",
    "term": "livelihood",
    "meaning": "n. 生计；营生",
    "phrase": "",
    "note": "/'laɪvlihʊd/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-031",
    "term": "alive",
    "meaning": "adj. （人；动植物）活的",
    "phrase": "",
    "note": "/ə'laɪv/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-032",
    "term": "lovely",
    "meaning": "adj. 可爱的；令人愉快的；美好的",
    "phrase": "",
    "note": "/'lʌvli/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-033",
    "term": "life",
    "meaning": "n. 生活；生命；人命",
    "phrase": "wildlife 野生动植物；lifestyle 生活方式",
    "note": "/laɪf/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-034",
    "term": "wildlife",
    "meaning": "n. 野生动植物；adj. 野生动植物的",
    "phrase": "",
    "note": "/'waɪldlaɪf/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-035",
    "term": "lifestyle",
    "meaning": "n. 生活方式",
    "phrase": "",
    "note": "/'laɪfstaɪl/；拓展词",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-036",
    "term": "style",
    "meaning": "n. 风格；样式",
    "phrase": "",
    "note": "/staɪl/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-037",
    "term": "animal",
    "meaning": "n. 动物；牲畜；adj. 动物的",
    "phrase": "",
    "note": "/'ænɪml/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-038",
    "term": "mammal",
    "meaning": "n. 哺乳动物",
    "phrase": "",
    "note": "/'mæm(ə)l/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-039",
    "term": "insect",
    "meaning": "n. 昆虫",
    "phrase": "",
    "note": "/'ɪnsekt/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-040",
    "term": "pet",
    "meaning": "n. 宠物；玩赏动物",
    "phrase": "",
    "note": "/pet/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-041",
    "term": "bite",
    "meaning": "v. 咬；啃；咬住；n. 咬；啃；浓烈的气味",
    "phrase": "",
    "note": "/baɪt/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-042",
    "term": "diary",
    "meaning": "n. 日记；日志",
    "phrase": "keep a diary 记日记",
    "note": "/'daɪəri/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-043",
    "term": "keep a diary",
    "meaning": "记日记",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-044",
    "term": "dairy",
    "meaning": "n. 乳品公司",
    "phrase": "",
    "note": "/'deəri/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-045",
    "term": "borrow",
    "meaning": "v. 借；借入；借用",
    "phrase": "",
    "note": "/'bɒrəʊ/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-046",
    "term": "lend",
    "meaning": "v. 把……借给；借出",
    "phrase": "lend sth. to sb. 借给某人某物 = lend sb. sth.",
    "note": "/lend/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-047",
    "term": "lend sth. to sb.",
    "meaning": "借给某人某物 = lend sb. sth.",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-048",
    "term": "vegetable",
    "meaning": "n. 蔬菜；植物人；adj. 蔬菜的；植物的",
    "phrase": "",
    "note": "/'vedʒtəbl/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-049",
    "term": "sweep",
    "meaning": "v./n. 打扫；扫",
    "phrase": "",
    "note": "/swi:p/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-050",
    "term": "mainly",
    "meaning": "adv. 主要地；首要地；大部分",
    "phrase": "",
    "note": "/'meɪnli/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-051",
    "term": "topic",
    "meaning": "n. 题目；话题；主题",
    "phrase": "",
    "note": "/'tɑ:pɪk/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-052",
    "term": "title",
    "meaning": "n. 标题；题目；职称；职务；v. 给……加标题",
    "phrase": "",
    "note": "/'taɪtl/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-053",
    "term": "entitle",
    "meaning": "v. 命名；使有权力；使有资格",
    "phrase": "",
    "note": "/ɪnˈtaɪtl/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-3-054",
    "term": "underline",
    "meaning": "v. 在（词语等下）画线；强调；突出；n. 下划线",
    "phrase": "",
    "note": "/ˌʌndər'laɪn/",
    "tag": "Word List 3 / 能力生活与自然",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-09T14:56:23",
    "updatedAt": "2026-06-09T14:56:23",
    "history": []
  },
  {
    "id": "word-list-4-001",
    "term": "stop",
    "meaning": "v. 结束；停止；n. 停止；终止；车站",
    "phrase": "",
    "note": "/sta:p/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-002",
    "term": "cancel",
    "meaning": "v. 取消；中止",
    "phrase": "call off 取消",
    "note": "/'kænsl/；近义词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-003",
    "term": "call off",
    "meaning": "取消",
    "phrase": "",
    "note": "近义短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-004",
    "term": "cancellation",
    "meaning": "n. 取消；撤销",
    "phrase": "",
    "note": "/,kænsə'leiʃn/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-005",
    "term": "cancer",
    "meaning": "n. 癌症",
    "phrase": "",
    "note": "/'kænsər/；例句：It has been said that stress causes cancer. 据说压力会诱发癌症。",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-006",
    "term": "start",
    "meaning": "v. 开始；启动；n. 开头；开端",
    "phrase": "",
    "note": "/sta:rt/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-007",
    "term": "star",
    "meaning": "n. 星；恒星；明星；v. 使担任主角；使成为明星",
    "phrase": "",
    "note": "/sta:r/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-008",
    "term": "begin",
    "meaning": "v. 开始；启动",
    "phrase": "to begin with 刚开始；首先；in the beginning 首先",
    "note": "/bi'gin/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-009",
    "term": "to begin with",
    "meaning": "刚开始；首先",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-010",
    "term": "in the beginning",
    "meaning": "首先",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-011",
    "term": "beginning",
    "meaning": "n. 开始；开端",
    "phrase": "",
    "note": "/bi'giniŋ/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-012",
    "term": "beginner",
    "meaning": "n. 初学者",
    "phrase": "",
    "note": "拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-013",
    "term": "renew",
    "meaning": "v. 重新开始；继续进行；更新；恢复",
    "phrase": "",
    "note": "/ri'nu:/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-014",
    "term": "outset",
    "meaning": "n. 起始；开始",
    "phrase": "",
    "note": "/'aut,set/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-015",
    "term": "end",
    "meaning": "n. 最后部分；末尾；v. 结束；终止",
    "phrase": "in the end 最后；终于；at the end of 在……结束的时候",
    "note": "/end/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-016",
    "term": "in the end",
    "meaning": "最后；终于",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-017",
    "term": "at the end of",
    "meaning": "在……结束的时候",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-018",
    "term": "endless",
    "meaning": "adj. 无止境的；永久的",
    "phrase": "",
    "note": "/'endles/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-019",
    "term": "ending",
    "meaning": "n. 结局；结尾",
    "phrase": "",
    "note": "/'endiŋ/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-020",
    "term": "cease",
    "meaning": "v. 停止；终止",
    "phrase": "",
    "note": "/si:s/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-021",
    "term": "over",
    "meaning": "adv. 结束；prep. 在……上面；悬在……上面",
    "phrase": "over again 再；重新；all over 到处",
    "note": "/'ouvər/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-022",
    "term": "over again",
    "meaning": "再；重新",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-023",
    "term": "all over",
    "meaning": "到处",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-024",
    "term": "under",
    "meaning": "adv. 在下面；少于；prep. 在……表面下；由……覆盖；adj. 下面的",
    "phrase": "",
    "note": "/'ʌndər/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-025",
    "term": "above",
    "meaning": "prep. 在……上方；高于；adv. 在上面；更高",
    "phrase": "above all 最重要的是；首先",
    "note": "/ə'bʌv/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-026",
    "term": "above all",
    "meaning": "最重要的是；首先",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-027",
    "term": "pause",
    "meaning": "n./v. 暂停；中止；停顿",
    "phrase": "",
    "note": "/pɔ:z/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-028",
    "term": "halt",
    "meaning": "n. 停止；暂停；v. 停止；终止；踌躇",
    "phrase": "",
    "note": "/hɔ:lt/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-029",
    "term": "ago",
    "meaning": "adv. 以前",
    "phrase": "",
    "note": "/ə'gou/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-030",
    "term": "before",
    "meaning": "prep. 之前；在……以前；conj. 在……以前；到……为止；adv. 以前；过去",
    "phrase": "",
    "note": "/bi'fɔ:r/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-031",
    "term": "after",
    "meaning": "prep. 在……之后；紧接着；在……身后；conj. 在……以后；adv. 后来；以后",
    "phrase": "",
    "note": "/'a:ftə(r)/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-032",
    "term": "now",
    "meaning": "adv. 现在；目前；conj. 既然；由于；adj. 现在的；现任的",
    "phrase": "right now 立刻；马上；just now 刚才；now that 既然；from now on 从现在开始",
    "note": "/nau/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-033",
    "term": "right now",
    "meaning": "立刻；马上",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-034",
    "term": "just now",
    "meaning": "刚才",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-035",
    "term": "now that",
    "meaning": "既然",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-036",
    "term": "from now on",
    "meaning": "从现在开始",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-037",
    "term": "nowadays",
    "meaning": "adv. 如今；现今",
    "phrase": "",
    "note": "/'nauədeiz/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-038",
    "term": "future",
    "meaning": "n. 将来；未来；adj. 将来的；未来的",
    "phrase": "in the future 在未来",
    "note": "/'fju:tʃər/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-039",
    "term": "in the future",
    "meaning": "在未来",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-040",
    "term": "recent",
    "meaning": "adj. 最近的；新近的；近来",
    "phrase": "",
    "note": "/'ri:snt/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-041",
    "term": "recently",
    "meaning": "adv. 最近；新近；近来",
    "phrase": "",
    "note": "/'ri:sntli/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-042",
    "term": "current",
    "meaning": "adj. 当前的；现时的；流行的；通用的",
    "phrase": "currently 当前；目前；currency 通货；货币；通用",
    "note": "/'kʌrənt/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-043",
    "term": "currently",
    "meaning": "adv. 当前；目前",
    "phrase": "",
    "note": "/'kʌrəntli/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-044",
    "term": "currency",
    "meaning": "n. 通货；货币；通用",
    "phrase": "",
    "note": "/'kʌrənsi/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-045",
    "term": "then",
    "meaning": "adv. 然后；当时；那时；其后",
    "phrase": "by then 到那时；from then on 从那时起；now and then 有时；时常",
    "note": "/ðen/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-046",
    "term": "by then",
    "meaning": "到那时",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-047",
    "term": "from then on",
    "meaning": "从那时起",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-048",
    "term": "now and then",
    "meaning": "有时；时常",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-049",
    "term": "only",
    "meaning": "adv. 只有；仅；adj. 唯一的；仅有的",
    "phrase": "only to do sth. 结果却（表意料之外的结果）",
    "note": "/ounli/；当“only+状语”位于句首时，其后习惯上要用部分倒装。例句：Only in this way can we learn English well. 只有这样才能学好英语。",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-050",
    "term": "only to do sth.",
    "meaning": "结果却（表意料之外的结果）",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-051",
    "term": "mere",
    "meaning": "adj. 只不过；仅仅；n. 湖；池塘",
    "phrase": "",
    "note": "/mir/",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-4-052",
    "term": "merely",
    "meaning": "adv. 仅仅；只",
    "phrase": "",
    "note": "/'miəli/；拓展词",
    "tag": "Word List 4 / 时间进程与方位",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-001",
    "term": "quarter",
    "meaning": "n. 四分之一",
    "phrase": "a quarter 一个季度；一刻钟；四分之一",
    "note": "/'kwɔ:rtər/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-002",
    "term": "a quarter",
    "meaning": "一个季度；一刻钟；四分之一",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-003",
    "term": "half",
    "meaning": "n. 半；一半；半场",
    "phrase": "",
    "note": "/hæf/；在表示“时间钟点”时，多用 half 表示“三十分钟”，如：“七点半”可翻译为 half past seven 或 seven thirty。注意没有 seven half 的说法。",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-004",
    "term": "internet",
    "meaning": "n. 互联网；因特网",
    "phrase": "",
    "note": "/'intərnet/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-005",
    "term": "website",
    "meaning": "n. 网站",
    "phrase": "",
    "note": "/'websait/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-006",
    "term": "surf",
    "meaning": "v. 上网；冲浪",
    "phrase": "surf the internet 上网",
    "note": "/sɜ:f/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-007",
    "term": "surf the internet",
    "meaning": "上网",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-008",
    "term": "net",
    "meaning": "n. 网；罗网；网子",
    "phrase": "network 人际网；网络",
    "note": "/net/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-009",
    "term": "network",
    "meaning": "n. 人际网；网络",
    "phrase": "",
    "note": "/'netwɜ:rk/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-010",
    "term": "site",
    "meaning": "n. 地基；选址；v. 给……择址",
    "phrase": "construction site 建筑工地",
    "note": "/sait/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-011",
    "term": "construction site",
    "meaning": "建筑工地",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-012",
    "term": "cite",
    "meaning": "v. 引用；引证",
    "phrase": "",
    "note": "/sait/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-013",
    "term": "way",
    "meaning": "n. 方法；路；道；方面；情况",
    "phrase": "all the way 一路上；自始至终；by the way 顺便提一下；get in the way of 挡……的路；妨碍",
    "note": "/wei/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-014",
    "term": "all the way",
    "meaning": "一路上；自始至终",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-015",
    "term": "by the way",
    "meaning": "顺便提一下",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-016",
    "term": "get in the way of",
    "meaning": "挡……的路；妨碍",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-017",
    "term": "method",
    "meaning": "n. 方法；办法",
    "phrase": "",
    "note": "/'meθəd/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-018",
    "term": "means",
    "meaning": "n. 方法；手段",
    "phrase": "by means of 依靠；通过；by no means 绝不",
    "note": "/mi:nz/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-019",
    "term": "by means of",
    "meaning": "依靠；通过",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-020",
    "term": "by no means",
    "meaning": "绝不",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-021",
    "term": "avenue",
    "meaning": "n. 途径；大道；林荫道",
    "phrase": "",
    "note": "/'ævənju:/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-022",
    "term": "mode",
    "meaning": "n. 方法；做法；方式；模式",
    "phrase": "",
    "note": "/moud/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-023",
    "term": "via",
    "meaning": "prep. 经由；经过",
    "phrase": "",
    "note": "/vaiə/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-024",
    "term": "strategy",
    "meaning": "n. 战略",
    "phrase": "",
    "note": "/'strætədʒi/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-025",
    "term": "solve",
    "meaning": "v. 解决；处理；解释；解答",
    "phrase": "settle 解决，结束（争端等）；tackle 应付，解决；handle 处理，应付，管理；deal with / do with / cope with 处理",
    "note": "/sɑ:lv/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-026",
    "term": "settle",
    "meaning": "v. 解决；结束（争端等）",
    "phrase": "",
    "note": "/'set(ə)l；近义词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-027",
    "term": "tackle",
    "meaning": "v. 应付；解决",
    "phrase": "",
    "note": "/'tæk(ə)l/；近义词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-028",
    "term": "handle",
    "meaning": "v. 处理；应付；管理；n. 把手；拉手",
    "phrase": "",
    "note": "/'hænd(ə)l/；近义词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-029",
    "term": "deal with",
    "meaning": "处理",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-030",
    "term": "do with",
    "meaning": "处理",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-031",
    "term": "cope with",
    "meaning": "处理",
    "phrase": "",
    "note": "短语",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-032",
    "term": "solution",
    "meaning": "n. 解决方法；解决方案",
    "phrase": "",
    "note": "/sə'lu:ʃn/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-033",
    "term": "brain",
    "meaning": "n. 脑；智力；智慧",
    "phrase": "",
    "note": "/brein/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-034",
    "term": "wise",
    "meaning": "adj. 有智慧的；睿智的",
    "phrase": "wisdom 智慧；明智",
    "note": "/waiz/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-035",
    "term": "wisdom",
    "meaning": "n. 智慧；明智",
    "phrase": "",
    "note": "/'wizdəm/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-036",
    "term": "clever",
    "meaning": "adj. 聪明的；伶俐的",
    "phrase": "",
    "note": "/'klevər/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-037",
    "term": "smart",
    "meaning": "adj. 聪明的；整洁的",
    "phrase": "",
    "note": "/sma:rt/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-038",
    "term": "bright",
    "meaning": "adj. 明亮的；聪明的；欢快的；充满幸福的；adv. 明亮地；光辉地",
    "phrase": "brightness 亮度；聪明；愉快",
    "note": "/brait/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-039",
    "term": "brightness",
    "meaning": "n. 亮度；聪明；愉快",
    "phrase": "",
    "note": "/'braitnəs/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-040",
    "term": "brilliant",
    "meaning": "adj. 有才能的；聪明的；极好的；鲜艳的",
    "phrase": "",
    "note": "/'briljənt/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-041",
    "term": "intelligent",
    "meaning": "adj. 有智力的；有才智的",
    "phrase": "intelligence 智力；才智；intellectual 脑力的；智力的",
    "note": "/in'telidʒənt/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-042",
    "term": "intelligence",
    "meaning": "n. 智力；才智",
    "phrase": "",
    "note": "/in'telidʒəns/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-043",
    "term": "intellectual",
    "meaning": "adj. 脑力的；智力的",
    "phrase": "",
    "note": "/,intə'lektʃuəl/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-044",
    "term": "stupid",
    "meaning": "adj. 愚蠢的；笨的；n. 笨蛋；傻瓜",
    "phrase": "",
    "note": "/'stu:pid/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-045",
    "term": "fool",
    "meaning": "n. 傻子；笨蛋；v. 愚弄；欺骗；adj. 愚蠢的；傻的",
    "phrase": "foolish 愚蠢的；傻的",
    "note": "/fu:l/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-046",
    "term": "foolish",
    "meaning": "adj. 愚蠢的；傻的",
    "phrase": "",
    "note": "/'fu:liʃ/；拓展词",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-047",
    "term": "silly",
    "meaning": "adj. 荒谬的；荒唐的；傻的",
    "phrase": "",
    "note": "/'sili/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  },
  {
    "id": "word-list-5-048",
    "term": "dull",
    "meaning": "adj. 乏味的；单调的；呆板的；v. 变钝",
    "phrase": "",
    "note": "/dʌl/",
    "tag": "Word List 5 / 方法智慧与网络",
    "status": "new",
    "stage": -1,
    "nextReviewAt": "",
    "lastStudiedAt": "",
    "createdAt": "2026-06-11T09:28:39",
    "updatedAt": "2026-06-11T09:28:39",
    "history": []
  }
];
let shouldPersistBuiltinWords = false;

const els = {
  totalCount: document.querySelector("#totalCount"),
  dueCount: document.querySelector("#dueCount"),
  todayCount: document.querySelector("#todayCount"),
  doneTodayCount: document.querySelector("#doneTodayCount"),
  examDays: document.querySelector("#examDays"),
  examDateInput: document.querySelector("#examDateInput"),
  todayNewTarget: document.querySelector("#todayNewTarget"),
  todayReviewTarget: document.querySelector("#todayReviewTarget"),
  todayNewHint: document.querySelector("#todayNewHint"),
  todayReviewHint: document.querySelector("#todayReviewHint"),
  importantCount: document.querySelector("#importantCount"),
  estimateMinutes: document.querySelector("#estimateMinutes"),
  clockNow: document.querySelector("#clockNow"),
  sprintStatus: document.querySelector("#sprintStatus"),
  dailyReport: document.querySelector("#dailyReport"),
  activeCard: document.querySelector("#activeCard"),
  todayTimeline: document.querySelector("#todayTimeline"),
  groupProgress: document.querySelector("#groupProgress"),
  wordList: document.querySelector("#wordList"),
  wordForm: document.querySelector("#wordForm"),
  termInput: document.querySelector("#termInput"),
  meaningInput: document.querySelector("#meaningInput"),
  phraseInput: document.querySelector("#phraseInput"),
  tagInput: document.querySelector("#tagInput"),
  thirdPersonInput: document.querySelector("#thirdPersonInput"),
  pastTenseInput: document.querySelector("#pastTenseInput"),
  pastParticipleInput: document.querySelector("#pastParticipleInput"),
  noteInput: document.querySelector("#noteInput"),
  clearFormButton: document.querySelector("#clearFormButton"),
  bulkInput: document.querySelector("#bulkInput"),
  bulkAddButton: document.querySelector("#bulkAddButton"),
  clearBulkButton: document.querySelector("#clearBulkButton"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  importButton: document.querySelector("#importButton"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  startNewButton: document.querySelector("#startNewButton"),
  batchLearnButton: document.querySelector("#batchLearnButton"),
  sprintButton: document.querySelector("#sprintButton"),
  focusDueButton: document.querySelector("#focusDueButton"),
  dictationOrderSelect: document.querySelector("#dictationOrderSelect"),
  copyPlanButton: document.querySelector("#copyPlanButton"),
  dueModeButton: document.querySelector("#dueModeButton"),
  newModeButton: document.querySelector("#newModeButton"),
  allModeButton: document.querySelector("#allModeButton"),
  toast: document.querySelector("#toast"),
};

const state = {
  words: loadWords(),
  settings: loadSettings(),
  mode: "due",
  practiceMode: "card",
  dictationOrder: "due",
  activeGroup: "all",
  sprint: {
    active: false,
    startedAt: "",
    endsAt: "",
    completed: 0,
  },
  activeId: null,
  answerVisible: false,
  spellingDraft: "",
  spellingResult: null,
  formDrafts: {
    third: "",
    past: "",
    participle: "",
  },
  formResult: null,
  lastAutoSpokenId: null,
  query: "",
  filter: "all",
};

function createId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `word-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowDate() {
  return new Date();
}

function todayKey(date = nowDate()) {
  return date.toISOString().slice(0, 10);
}

function dateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function defaultExamDate() {
  const now = nowDate();
  const currentYearExam = new Date(now.getFullYear(), 3, 18);
  const exam = currentYearExam >= now ? currentYearExam : new Date(now.getFullYear() + 1, 3, 18);
  return dateInputValue(exam);
}

function normalizeText(value) {
  return String(value || "").trim();
}

function mergeStudyText(current, incoming) {
  const currentText = normalizeText(current);
  const incomingText = normalizeText(incoming);
  if (!incomingText) {
    return currentText;
  }
  if (!currentText) {
    return incomingText;
  }
  return incomingText
    .split(/[；;]/)
    .map(normalizeText)
    .filter(Boolean)
    .reduce((merged, item) => (merged.includes(item) ? merged : `${merged}；${item}`), currentText);
}

function normalizeSpelling(value) {
  return normalizeText(value)
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isSpellingCorrect(input, word) {
  return normalizeSpelling(input) === normalizeSpelling(word.term);
}

const IRREGULAR_VERB_FORMS = {
  be: { third: "is", past: "was", participle: "been" },
  have: { third: "has", past: "had", participle: "had" },
  do: { third: "does", past: "did", participle: "done" },
  go: { third: "goes", past: "went", participle: "gone" },
  buy: { past: "bought", participle: "bought" },
  sell: { past: "sold", participle: "sold" },
  take: { past: "took", participle: "taken" },
  know: { past: "knew", participle: "known" },
  see: { past: "saw", participle: "seen" },
  feel: { past: "felt", participle: "felt" },
  hear: { past: "heard", participle: "heard" },
  speak: { past: "spoke", participle: "spoken" },
  tell: { past: "told", participle: "told" },
  read: { past: "read", participle: "read" },
  say: { third: "says", past: "said", participle: "said" },
  give: { past: "gave", participle: "given" },
  make: { past: "made", participle: "made" },
  write: { past: "wrote", participle: "written" },
  come: { past: "came", participle: "come" },
  run: { past: "ran", participle: "run" },
  eat: { past: "ate", participle: "eaten" },
  drink: { past: "drank", participle: "drunk" },
  begin: { past: "began", participle: "begun" },
  swim: { past: "swam", participle: "swum" },
  lend: { past: "lent", participle: "lent" },
  spend: { past: "spent", participle: "spent" },
  cost: { past: "cost", participle: "cost" },
  pay: { third: "pays", past: "paid", participle: "paid" },
  bring: { past: "brought", participle: "brought" },
  think: { past: "thought", participle: "thought" },
  teach: { past: "taught", participle: "taught" },
  catch: { past: "caught", participle: "caught" },
  keep: { past: "kept", participle: "kept" },
  sleep: { past: "slept", participle: "slept" },
  leave: { past: "left", participle: "left" },
  meet: { past: "met", participle: "met" },
  get: { past: "got", participle: "gotten" },
  forget: { past: "forgot", participle: "forgotten" },
  understand: { past: "understood", participle: "understood" },
  stand: { past: "stood", participle: "stood" },
  choose: { past: "chose", participle: "chosen" },
  break: { past: "broke", participle: "broken" },
  drive: { past: "drove", participle: "driven" },
  ride: { past: "rode", participle: "ridden" },
  build: { past: "built", participle: "built" },
  send: { past: "sent", participle: "sent" },
  sit: { past: "sat", participle: "sat" },
  cut: { past: "cut", participle: "cut" },
  put: { past: "put", participle: "put" },
  let: { past: "let", participle: "let" },
};

function emptyVerbForms() {
  return { third: "", past: "", participle: "" };
}

function canInferVerbForms(term) {
  return /^[a-z]+$/i.test(normalizeText(term));
}

function thirdPersonForm(base) {
  if (/(ch|sh|s|x|z|o)$/i.test(base)) {
    return `${base}es`;
  }
  if (/[^aeiou]y$/i.test(base)) {
    return `${base.slice(0, -1)}ies`;
  }
  return `${base}s`;
}

function regularPastForm(base) {
  if (/e$/i.test(base)) {
    return `${base}d`;
  }
  if (/[^aeiou]y$/i.test(base)) {
    return `${base.slice(0, -1)}ied`;
  }
  if (/[^aeiou][aeiou][^aeiouwxy]$/i.test(base) && base.length <= 6) {
    return `${base}${base.slice(-1)}ed`;
  }
  return `${base}ed`;
}

function inferVerbForms(term) {
  const base = normalizeText(term).toLowerCase();
  if (!canInferVerbForms(base)) {
    return emptyVerbForms();
  }
  const irregular = IRREGULAR_VERB_FORMS[base] || {};
  const past = irregular.past || regularPastForm(base);
  return {
    third: irregular.third || thirdPersonForm(base),
    past,
    participle: irregular.participle || past,
  };
}

function verbForms(word) {
  const inferred = inferVerbForms(word.term);
  const saved = word.forms || {};
  return {
    third: normalizeText(saved.third || saved.thirdPerson || word.thirdPerson || inferred.third),
    past: normalizeText(saved.past || saved.pastTense || word.pastTense || inferred.past),
    participle: normalizeText(saved.participle || saved.pastParticiple || word.pastParticiple || inferred.participle),
  };
}

function hasVerbForms(word) {
  const forms = verbForms(word);
  return Boolean(forms.third || forms.past || forms.participle);
}

function isVerbFormsCorrect(drafts, word) {
  const forms = verbForms(word);
  const keys = ["third", "past", "participle"].filter((key) => forms[key]);
  return keys.length > 0 && keys.every((key) => normalizeSpelling(drafts[key]) === normalizeSpelling(forms[key]));
}

function verbFormsAnswerText(word) {
  const forms = verbForms(word);
  return `三单：${forms.third || "-"}  过去式：${forms.past || "-"}  过去分词：${forms.participle || "-"}`;
}

function speechSupported() {
  return Boolean(
    typeof window !== "undefined" &&
    window.speechSynthesis &&
    window.SpeechSynthesisUtterance
  );
}

function speakTerm(term, options = {}) {
  const text = normalizeText(term);
  if (!text) {
    return false;
  }
  if (!speechSupported()) {
    if (!options.silent) {
      showToast("当前浏览器不支持自动读音");
    }
    return false;
  }
  window.speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
  return true;
}

function escapeHTML(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadSettings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    return {
      examDate: parsed.examDate || defaultExamDate(),
    };
  } catch {
    return { examDate: defaultExamDate() };
  }
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  } catch {
    showToast("设置保存失败");
  }
}


/* builtin word package */
function cloneBuiltinWord(word) {
  return normalizeWord(JSON.parse(JSON.stringify(word)));
}

function cloneBuiltinWords() {
  return BUILTIN_WORDS.map(cloneBuiltinWord);
}

function createEmptyProgress(source = {}) {
  const stage = Number.isInteger(source.stage) ? source.stage : -1;
  const history = Array.isArray(source.history) ? source.history : [];
  return {
    status: source.status || "new",
    stage,
    nextReviewAt: source.nextReviewAt || "",
    lastStudiedAt: source.lastStudiedAt || "",
    history,
  };
}

function normalizeModeProgress(word) {
  const existing = word.progress && typeof word.progress === "object" ? word.progress : {};
  const legacyProgress = createEmptyProgress(word);
  return PROGRESS_MODES.reduce((progressByMode, mode) => {
    const source = existing[mode] || (mode === "card" ? legacyProgress : {});
    progressByMode[mode] = createEmptyProgress(source);
    return progressByMode;
  }, {});
}

function modeProgress(word, mode = state.practiceMode) {
  if (!word.progress || typeof word.progress !== "object") {
    word.progress = normalizeModeProgress(word);
  }
  if (!PROGRESS_MODES.includes(mode)) {
    mode = "card";
  }
  if (!word.progress[mode]) {
    word.progress[mode] = createEmptyProgress();
  }
  return word.progress[mode];
}

function activeModeProgress(word) {
  return modeProgress(word, state.practiceMode);
}

function recordModeHistory(word, entry, mode = state.practiceMode) {
  const progress = modeProgress(word, mode);
  const historyEntry = { ...entry, mode };
  progress.history.push(historyEntry);
  if (!Array.isArray(word.history)) {
    word.history = [];
  }
  word.history.push(historyEntry);
}

function applyBuiltinWords(words) {
  let packageAlreadyApplied = false;
  try {
    packageAlreadyApplied = localStorage.getItem(BUILTIN_PACKAGE_KEY) === "1";
  } catch {
    packageAlreadyApplied = false;
  }

  const byTerm = new Map(words.map((word) => [word.term.toLowerCase(), word]));
  BUILTIN_WORDS.forEach((sourceWord) => {
    const builtin = cloneBuiltinWord(sourceWord);
    const existing = byTerm.get(builtin.term.toLowerCase());
    if (existing) {
      const previous = JSON.stringify(existing);
      existing.meaning = mergeStudyText(existing.meaning, builtin.meaning);
      existing.phrase = mergeStudyText(existing.phrase, builtin.phrase);
      existing.note = mergeStudyText(existing.note, builtin.note);
      existing.forms = {
        third: normalizeText(existing.forms?.third) || normalizeText(builtin.forms?.third),
        past: normalizeText(existing.forms?.past) || normalizeText(builtin.forms?.past),
        participle: normalizeText(existing.forms?.participle) || normalizeText(builtin.forms?.participle),
      };
      existing.tag = normalizeText(existing.tag) || builtin.tag;
      if (JSON.stringify(existing) !== previous) {
        shouldPersistBuiltinWords = true;
      }
      return;
    }

    if (!packageAlreadyApplied) {
      words.push(builtin);
      byTerm.set(builtin.term.toLowerCase(), builtin);
      shouldPersistBuiltinWords = true;
    }
  });

  if (!packageAlreadyApplied) {
    shouldPersistBuiltinWords = true;
  }
  return words;
}

function loadWords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      shouldPersistBuiltinWords = true;
      return cloneBuiltinWords();
    }
    const parsed = JSON.parse(raw);
    const words = Array.isArray(parsed) ? parsed.map(normalizeWord) : [];
    return applyBuiltinWords(words);
  } catch {
    shouldPersistBuiltinWords = true;
    return cloneBuiltinWords();
  }
}

function persistBuiltinWordsIfNeeded() {
  if (!shouldPersistBuiltinWords) {
    return;
  }
  saveWords();
  try {
    localStorage.setItem(BUILTIN_PACKAGE_KEY, "1");
  } catch {
    // Storage failures are handled by saveWords when possible.
  }
}

function normalizeWord(word) {
  return {
    id: word.id || createId(),
    term: word.term || "",
    meaning: word.meaning || "",
    phrase: word.phrase || "",
    note: word.note || "",
    tag: word.tag || "",
    forms: {
      third: normalizeText(word.forms?.third || word.forms?.thirdPerson || word.thirdPerson || ""),
      past: normalizeText(word.forms?.past || word.forms?.pastTense || word.pastTense || ""),
      participle: normalizeText(word.forms?.participle || word.forms?.pastParticiple || word.pastParticiple || ""),
    },
    important: Boolean(word.important),
    status: word.status || "new",
    stage: Number.isInteger(word.stage) ? word.stage : -1,
    nextReviewAt: word.nextReviewAt || "",
    lastStudiedAt: word.lastStudiedAt || "",
    createdAt: word.createdAt || new Date().toISOString(),
    updatedAt: word.updatedAt || new Date().toISOString(),
    history: Array.isArray(word.history) ? word.history : [],
    progress: normalizeModeProgress(word),
  };
}

function saveWords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.words));
    return true;
  } catch {
    showToast("保存失败，可能是浏览器空间不足");
    return false;
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function formatDateTime(value) {
  if (!value) {
    return "未安排";
  }
  const date = new Date(value);
  const sameDay = todayKey(date) === todayKey();
  const day = sameDay ? "今天" : `${date.getMonth() + 1}/${date.getDate()}`;
  return `${day} ${date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
}

function formatTime(value) {
  return new Date(value).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}

function isDue(word, date = nowDate(), mode = state.practiceMode) {
  const progress = modeProgress(word, mode);
  return Boolean(progress.nextReviewAt && new Date(progress.nextReviewAt) <= date);
}

function isTodayReview(word, mode = state.practiceMode) {
  const progress = modeProgress(word, mode);
  return Boolean(progress.nextReviewAt && todayKey(new Date(progress.nextReviewAt)) === todayKey());
}

function learnedToday(word, mode = state.practiceMode) {
  const progress = modeProgress(word, mode);
  return progress.history.some((entry) => todayKey(new Date(entry.time)) === todayKey());
}

function wordGroupName(word) {
  const tag = normalizeText(word.tag);
  if (!tag) {
    return "未分组";
  }
  return tag.split("/")[0].trim() || tag;
}

function wordMatchesActiveGroup(word) {
  return state.activeGroup === "all" || wordGroupName(word) === state.activeGroup;
}

function practiceEligibleWords(words) {
  return state.practiceMode === "forms" ? words.filter(hasVerbForms) : words;
}

function resetTypingState() {
  state.spellingDraft = "";
  state.spellingResult = null;
  state.formDrafts = emptyVerbForms();
  state.formResult = null;
}

function statusOf(word, mode = state.practiceMode) {
  const progress = modeProgress(word, mode);
  if (isDue(word, nowDate(), mode)) {
    return "due";
  }
  if (progress.status === "new" || (progress.stage < 0 && !progress.nextReviewAt)) {
    return "new";
  }
  if (progress.stage >= REVIEW_STEPS.length - 1) {
    return "mature";
  }
  return "learning";
}

function statusLabel(status) {
  return {
    due: "到期",
    new: "新词",
    learning: "学习中",
    mature: "稳定",
    important: "重点",
  }[status] || "新词";
}

function scheduleNext(word, result, options = {}) {
  const progress = modeProgress(word);
  const completedAt = options.completedAt || nowDate();
  let nextStep = 0;
  let delay = REVIEW_STEPS[0].ms;
  let label = REVIEW_STEPS[0].label;

  if (result === "new" || result === "remember") {
    nextStep = Math.min(progress.stage + 1, REVIEW_STEPS.length - 1);
    if (progress.stage < 0) {
      nextStep = 0;
    }
    delay = REVIEW_STEPS[nextStep].ms;
    label = REVIEW_STEPS[nextStep].label;
  }

  if (result === "fuzzy") {
    nextStep = Math.max(0, progress.stage);
    delay = REVIEW_STEPS[0].ms;
    label = REVIEW_STEPS[0].label;
  }

  if (result === "forgot") {
    nextStep = -1;
    delay = 5 * 60 * 1000;
    label = "5分钟";
    word.important = true;
  }

  const nextDate = new Date(completedAt.getTime() + delay);
  progress.stage = nextStep;
  progress.status = nextStep >= REVIEW_STEPS.length - 1 ? "mature" : "learning";
  progress.nextReviewAt = nextDate.toISOString();
  progress.lastStudiedAt = completedAt.toISOString();
  word.updatedAt = completedAt.toISOString();
  recordModeHistory(word, {
    time: completedAt.toISOString(),
    result,
    nextReviewAt: progress.nextReviewAt,
  });
  if (!options.silent) {
    showToast(`下次：${formatDateTime(progress.nextReviewAt)}（${label}后）`);
  }
}

function getQueue() {
  const scopedWords = practiceEligibleWords(state.words.filter(wordMatchesActiveGroup));
  if (state.sprint.active) {
    return sprintQueue(scopedWords);
  }
  const sorted = getOrderedStudyWords(scopedWords);

  if (state.mode === "new") {
    return sorted.filter((word) => statusOf(word) === "new");
  }
  if (state.mode === "all") {
    return sorted;
  }
  return sorted.filter((word) => isDue(word));
}

function sprintQueue(words = state.words.filter(wordMatchesActiveGroup)) {
  const rank = (word) => {
    if (isDue(word)) {
      return 0;
    }
    if (word.important) {
      return 1;
    }
    if (statusOf(word) === "new") {
      return 2;
    }
    return 3;
  };
  return [...words].sort((a, b) => {
    const rankDiff = rank(a) - rank(b);
    if (rankDiff) {
      return rankDiff;
    }
    const aTime = activeModeProgress(a).nextReviewAt || "9999-12-31";
    const bTime = activeModeProgress(b).nextReviewAt || "9999-12-31";
    return aTime.localeCompare(bTime) || a.term.localeCompare(b.term, "en", { sensitivity: "base" });
  });
}

function stableRandomRank(word) {
  const seed = `${todayKey()}-${word.id || word.term}`;
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function getOrderedStudyWords(words, order = state.dictationOrder) {
  const sortedByDue = [...words].sort((a, b) => {
    const ad = activeModeProgress(a).nextReviewAt || "9999-12-31";
    const bd = activeModeProgress(b).nextReviewAt || "9999-12-31";
    return ad.localeCompare(bd);
  });

  if (state.practiceMode !== "dictation") {
    return sortedByDue;
  }

  switch (order) {
    case "important":
      return sortedByDue.sort((a, b) => Number(b.important) - Number(a.important));
    case "random":
      return sortedByDue.sort((a, b) => stableRandomRank(a) - stableRandomRank(b));
    case "az":
      return sortedByDue.sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
    case "due":
    default:
      return sortedByDue.sort((a, b) => {
        const dueDiff = Number(isDue(b)) - Number(isDue(a));
        if (dueDiff) {
          return dueDiff;
        }
        const aTime = activeModeProgress(a).nextReviewAt || "9999-12-31";
        const bTime = activeModeProgress(b).nextReviewAt || "9999-12-31";
        return aTime.localeCompare(bTime);
      });
  }
}

function chooseActiveWord(forceFirst = false) {
  const queue = getQueue();
  if (!queue.length) {
    state.activeId = null;
    state.answerVisible = false;
    return;
  }
  const activeStillValid = queue.some((word) => word.id === state.activeId);
  if (forceFirst || !activeStillValid) {
    state.activeId = queue[0].id;
    state.answerVisible = false;
    resetTypingState();
    state.lastAutoSpokenId = null;
  }
}

function activeWord() {
  return state.words.find((word) => word.id === state.activeId) || null;
}

function render() {
  chooseActiveWord();
  renderStats();
  renderDashboard();
  renderDailyReport();
  renderClock();
  renderSprintStatus();
  renderModeButtons();
  renderPracticeButtons();
  renderDictationTools();
  renderActiveCard();
  renderTimeline();
  renderGroupProgress();
  renderWordList();
}

function renderStats() {
  els.totalCount.textContent = state.words.length;
  els.dueCount.textContent = state.words.filter((word) => isDue(word)).length;
  els.todayCount.textContent = state.words.filter(isTodayReview).length;
  els.doneTodayCount.textContent = state.words.filter(learnedToday).length;
}

function renderClock() {
  els.clockNow.textContent = nowDate().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(ms) {
  const safeMs = Math.max(0, ms);
  const minutes = Math.floor(safeMs / 60000);
  const seconds = Math.floor((safeMs % 60000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function endSprint() {
  if (!state.sprint.active) {
    return;
  }
  state.sprint.active = false;
  state.sprint.endsAt = "";
  state.sprint.startedAt = "";
  showToast(`15分钟冲刺结束，完成 ${state.sprint.completed} 个`);
}

function renderSprintStatus() {
  if (!els.sprintStatus) {
    return;
  }
  if (!state.sprint.active) {
    els.sprintStatus.textContent = "15分钟未开始";
    els.sprintStatus.classList.remove("active");
    return;
  }
  const remaining = new Date(state.sprint.endsAt) - nowDate();
  if (remaining <= 0) {
    endSprint();
    els.sprintStatus.textContent = `本轮完成 ${state.sprint.completed} 个`;
    els.sprintStatus.classList.remove("active");
    return;
  }
  els.sprintStatus.classList.add("active");
  els.sprintStatus.textContent = `冲刺 ${formatDuration(remaining)} · ${state.sprint.completed} 个`;
}

function todayHistoryEntries(mode = state.practiceMode) {
  const today = todayKey();
  return state.words.flatMap((word) => modeProgress(word, mode).history
    .filter((entry) => todayKey(new Date(entry.time)) === today)
    .map((entry) => ({ ...entry, word })));
}

function dailyReportStats() {
  const entries = todayHistoryEntries();
  const studiedWords = new Set(entries.map((entry) => entry.word.id));
  const reviewEntries = entries.filter((entry) => ["new", "remember", "fuzzy", "forgot"].includes(entry.result));
  const spellingEntries = entries.filter((entry) => ["spell-correct", "spell-wrong", "forms-correct", "forms-wrong"].includes(entry.result));
  const spellingCorrect = spellingEntries.filter((entry) => ["spell-correct", "forms-correct"].includes(entry.result)).length;
  const forgotten = entries.filter((entry) => ["forgot", "spell-wrong", "forms-wrong"].includes(entry.result)).length;
  const importantNow = state.words.filter((word) => word.important).length;
  const nextReview = state.words
    .map((word) => modeProgress(word))
    .filter((progress) => progress.nextReviewAt)
    .sort((a, b) => a.nextReviewAt.localeCompare(b.nextReviewAt))[0]?.nextReviewAt || "";
  return {
    studied: studiedWords.size,
    reviews: reviewEntries.length,
    spellingTotal: spellingEntries.length,
    spellingCorrect,
    spellingRate: spellingEntries.length ? Math.round((spellingCorrect / spellingEntries.length) * 100) : 0,
    forgotten,
    importantNow,
    nextReview,
  };
}

function renderDailyReport() {
  if (!els.dailyReport) {
    return;
  }
  const report = dailyReportStats();
  els.dailyReport.innerHTML = `
    <div class="panel-heading">
      <div>
        <p class="eyebrow">Report</p>
        <h2>今日战报</h2>
      </div>
      <span class="status-pill">${todayKey()}</span>
    </div>
    <div class="report-grid">
      <article><span>今日学习</span><strong>${report.studied}</strong><p>个词有记录</p></article>
      <article><span>复习动作</span><strong>${report.reviews}</strong><p>记完/会了/模糊/忘了</p></article>
      <article><span>拼写正确率</span><strong>${report.spellingTotal ? `${report.spellingRate}%` : "--"}</strong><p>${report.spellingCorrect}/${report.spellingTotal}</p></article>
      <article><span>忘记/拼错</span><strong>${report.forgotten}</strong><p>自动进入重点复盘</p></article>
      <article><span>重点词</span><strong>${report.importantNow}</strong><p>当前重点词本</p></article>
      <article><span>下次提醒</span><strong>${report.nextReview ? formatDateTime(report.nextReview) : "--"}</strong><p>按间隔复习生成</p></article>
    </div>`;
}

function renderModeButtons() {
  [
    [els.dueModeButton, "due"],
    [els.newModeButton, "new"],
    [els.allModeButton, "all"],
  ].forEach(([button, mode]) => button.classList.toggle("active", state.mode === mode));
}

function renderPracticeButtons() {
  document.querySelectorAll("[data-practice-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.practiceMode === state.practiceMode);
  });
}

function renderDictationTools() {
  if (!els.dictationOrderSelect) {
    return;
  }
  if (els.dictationOrderSelect.value !== state.dictationOrder) {
    els.dictationOrderSelect.value = state.dictationOrder;
  }
  const visible = state.practiceMode === "dictation";
  els.dictationOrderSelect.closest(".dictation-tools")?.classList.toggle("is-visible", visible);
}

function renderDashboard() {
  const newCount = state.words.filter((word) => statusOf(word) === "new").length;
  const dueNow = state.words.filter((word) => isDue(word)).length;
  const todayReview = state.words.filter(isTodayReview).length;
  const important = state.words.filter((word) => word.important).length;
  const importantDue = state.words.filter((word) => word.important && (isDue(word) || statusOf(word) === "new")).length;
  const newTarget = Math.min(30, newCount);
  const reviewTarget = Math.max(dueNow, todayReview);
  const estimate = Math.max(0, Math.ceil(newTarget * 0.8 + reviewTarget * 0.45 + importantDue * 0.35));
  const examDate = new Date(`${state.settings.examDate}T00:00:00`);
  const today = new Date(`${todayKey()}T00:00:00`);
  const dayDiff = Math.ceil((examDate - today) / (24 * 60 * 60 * 1000));

  els.examDays.textContent = Number.isFinite(dayDiff) ? Math.max(0, dayDiff) : "--";
  if (els.examDateInput.value !== state.settings.examDate) {
    els.examDateInput.value = state.settings.examDate;
  }
  els.todayNewTarget.textContent = newTarget;
  els.todayReviewTarget.textContent = reviewTarget;
  els.importantCount.textContent = important;
  els.estimateMinutes.textContent = estimate;
  els.todayNewHint.textContent = newCount ? `还剩 ${newCount} 个新词，建议今天先拿下 ${newTarget} 个` : "新词清空了，今天专心复习";
  els.todayReviewHint.textContent = reviewTarget ? `现在到期 ${dueNow} 个，今日已排 ${todayReview} 个` : "暂无到期复习，等系统提醒";
}

function renderGroupProgress() {
  const groups = new Map();
  state.words.forEach((word) => {
    const name = wordGroupName(word);
    if (!groups.has(name)) {
      groups.set(name, []);
    }
    groups.get(name).push(word);
  });

  if (!groups.size) {
    els.groupProgress.innerHTML = `<div class="group-card"><strong>暂无分组</strong><p>导入 Word List 后会显示进度</p></div>`;
    return;
  }

  const modeName = PROGRESS_MODE_LABELS[state.practiceMode] || "当前模式";
  const allCard = `
      <article class="group-card${state.activeGroup === "all" ? " active" : ""}" data-group-action="study" data-group="all">
        <strong>全部 Word List</strong>
        <div class="progress-bar"><div class="progress-fill" style="width:100%"></div></div>
        <p>${modeName}独立进度 · 总计 ${state.words.length} 个</p>
      </article>`;

  els.groupProgress.innerHTML = allCard + [...groups.entries()].map(([name, words]) => {
    const learned = words.filter((word) => modeProgress(word).stage >= 0).length;
    const mature = words.filter((word) => statusOf(word) === "mature").length;
    const due = words.filter((word) => isDue(word)).length;
    const important = words.filter((word) => word.important).length;
    const percent = Math.round((learned / words.length) * 100);
    return `
      <article class="group-card${state.activeGroup === name ? " active" : ""}" data-group-action="study" data-group="${escapeHTML(name)}">
        <strong>${escapeHTML(name)}</strong>
        <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
        <p>${learned}/${words.length} 已学 · 到期 ${due} · 重点 ${important} · 稳定 ${mature}</p>
        <button class="text-button" type="button">只背本组</button>
      </article>`;
  }).join("");
}

function practiceView(word) {
  const safeMeaning = word.meaning || "未填中文";
  const safeTerm = word.term || "未命名";
  const phrase = word.phrase || "";

  if (state.practiceMode === "forms") {
    return {
      prompt: "动词变形拼写",
      target: safeTerm,
      hidden: "三单 / 过去式 / 过去分词已盖住",
      answer: verbFormsAnswerText(word),
      extra: safeMeaning,
    };
  }

  if (state.practiceMode === "spell") {
    const pattern = new RegExp(escapeRegExp(safeTerm), "ig");
    const hintPhrase = phrase && pattern.test(phrase) ? phrase.replace(pattern, "____") : phrase;
    return {
      prompt: "看提示，拼出英文",
      target: safeMeaning,
      hidden: "输入英文后检查",
      answer: safeTerm,
      extra: hintPhrase ? `搭配提示：${hintPhrase}` : "",
    };
  }

  if (state.practiceMode === "dictation") {
    return {
      prompt: "听读音，拼写英文",
      target: "先听读音，再把单词或短语拼出来",
      hidden: "答案已盖住",
      answer: safeTerm,
      extra: state.answerVisible ? safeMeaning : "",
    };
  }

  if (state.practiceMode === "zhToEn") {
    return {
      prompt: "看中文，拼出英文",
      target: safeMeaning,
      hidden: "英文已盖住",
      answer: safeTerm,
      extra: phrase ? `搭配：${phrase}` : "",
    };
  }

  if (state.practiceMode === "phrase") {
    const pattern = new RegExp(escapeRegExp(safeTerm), "i");
    const blanked = phrase && pattern.test(phrase) ? phrase.replace(pattern, "____") : (phrase || safeMeaning);
    return {
      prompt: "搭配填空",
      target: blanked,
      hidden: "答案已盖住",
      answer: safeTerm,
      extra: safeMeaning,
    };
  }

  if (state.practiceMode === "enToZh") {
    return {
      prompt: "看英文，说中文",
      target: safeTerm,
      hidden: "中文已盖住",
      answer: safeMeaning,
      extra: phrase ? `搭配：${phrase}` : "",
    };
  }

  return {
    prompt: "卡片记忆",
    target: safeTerm,
    hidden: "释义已盖住",
    answer: safeMeaning,
    extra: phrase ? `搭配：${phrase}` : "",
  };
}

function renderVerbFormsBox(word) {
  if (state.practiceMode !== "forms") {
    return "";
  }
  const forms = verbForms(word);
  const drafts = state.formDrafts;
  const result = state.formResult;
  const answer = result ? `
    <div class="forms-summary ${result.correct ? "is-correct" : "is-wrong"}">
      ${result.correct ? "三个变形都拼对了" : `正确答案：${escapeHTML(verbFormsAnswerText(word))}`}
    </div>` : "";
  return `
    <div class="spell-box verb-forms-box">
      <div class="form-result-grid">
        <label>
          <span>三单</span>
          <input data-form-input="third" type="text" value="${escapeHTML(drafts.third)}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="${escapeHTML(forms.third || "三单")}">
        </label>
        <label>
          <span>过去式</span>
          <input data-form-input="past" type="text" value="${escapeHTML(drafts.past)}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="${escapeHTML(forms.past || "过去式")}">
        </label>
        <label>
          <span>过去分词</span>
          <input data-form-input="participle" type="text" value="${escapeHTML(drafts.participle)}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="${escapeHTML(forms.participle || "过去分词")}">
        </label>
      </div>
      <div class="spell-actions">
        <button class="primary-button" data-card-action="check-forms" type="button">检查变形</button>
        <button class="secondary-button" data-card-action="clear-spelling" type="button">重写</button>
        <button class="secondary-button audio-button" data-card-action="speak" type="button">播放原词</button>
      </div>
      <p>三个都填对才算通过；不规则词可以在添加单词时手动填准。</p>
      ${answer}
    </div>`;
}

function renderSpellingBox(word) {
  if (!["spell", "dictation"].includes(state.practiceMode)) {
    return "";
  }
  const result = state.spellingResult;
  const value = escapeHTML(state.spellingDraft);
  const feedback = result ? `
    <div class="spell-feedback ${result.correct ? "is-correct" : "is-wrong"}">
      ${result.correct ? "拼对了" : `差一点，正确答案：${escapeHTML(word.term)}`}
    </div>` : "";
  const hint = state.practiceMode === "dictation"
    ? "听不清可以点“再听一次”，不会就点显示答案。"
    : "大小写不影响判断，短语里的空格也会自动整理。";
  return `
    <div class="spell-box">
      <label>
        <span>${state.practiceMode === "dictation" ? "听写输入" : "拼写输入"}</span>
        <input data-spell-input type="text" value="${value}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="在这里输入英文">
      </label>
      <div class="spell-actions">
        <button class="primary-button" data-card-action="check-spelling" type="button">检查拼写</button>
        <button class="secondary-button" data-card-action="clear-spelling" type="button">重写</button>
        <button class="secondary-button audio-button" data-card-action="speak" type="button">播放读音</button>
      </div>
      <p>${hint}</p>
      ${feedback}
    </div>`;
}

function renderActiveCard() {
  const word = activeWord();
  if (!word) {
    const message = state.practiceMode === "forms" && state.words.length ? "当前没有可练的动词变形" : (state.words.length ? "现在没有到期词" : "先加入第一批单词");
    const detail = state.practiceMode === "forms" && state.words.length ? "短语不会进入变形练习；可以切换 Word List 或添加单个动词" : (state.words.length ? "切到“新词记忆”或“全部抽查”继续" : "把你发来的单词和短语放进词库");
    els.activeCard.innerHTML = `
      <div class="empty-card">
        <div>
          <h3>${message}</h3>
          <p>${detail}</p>
          <button class="primary-button" data-card-action="new-mode">新词记忆</button>
        </div>
      </div>`;
    return;
  }

  const progress = activeModeProgress(word);
  const status = statusOf(word);
  const typingMode = ["spell", "dictation", "forms"].includes(state.practiceMode);
  const letters = typingMode ? [] : word.term.replace(/[^a-zA-Z]/g, "").slice(0, 9).split("");
  const ribbon = typingMode
    ? (state.practiceMode === "forms" ? "<span>F</span><span>O</span><span>R</span><span>M</span>" : "<span>S</span><span>P</span><span>E</span><span>L</span><span>L</span>")
    : (letters.length ? letters.map((letter) => `<span>${escapeHTML(letter)}</span>`).join("") : "<span>W</span><span>O</span><span>R</span><span>D</span>");
  const view = practiceView(word);
  const answer = state.answerVisible ? `<p class="word-meaning">${escapeHTML(view.answer)}</p>` : `<div class="answer-mask">${escapeHTML(view.hidden)}</div>`;
  const extra = state.answerVisible && view.extra ? `<p class="word-phrase">${escapeHTML(view.extra)}</p>` : "";
  const note = state.answerVisible && word.note ? `<p class="word-note">备注：${escapeHTML(word.note)}</p>` : "";
  const important = word.important ? `<p class="important-line">重点词</p>` : "";
  const spellingBox = state.practiceMode === "forms" ? renderVerbFormsBox(word) : renderSpellingBox(word);

  els.activeCard.innerHTML = `
    <div class="card-top">
      <div class="letter-ribbon">${ribbon}</div>
      <p class="quiz-prompt">${escapeHTML(view.prompt)}</p>
      <h3 class="${state.practiceMode === "card" || state.practiceMode === "enToZh" ? "word-term" : "quiz-target"}">${escapeHTML(view.target)}</h3>
      ${spellingBox}
      ${answer}
      ${extra}
      ${note}
      ${important}
      <p class="next-line">下次：${formatDateTime(progress.nextReviewAt)} · ${statusLabel(status)}</p>
    </div>
    <div class="card-bottom">
      <div class="stage-track">${REVIEW_STEPS.map((_, index) => `<span class="stage-dot${index <= progress.stage ? " active" : ""}"></span>`).join("")}</div>
      <div class="card-actions">
        <button class="secondary-button audio-button" data-card-action="speak">读音</button>
        <button class="secondary-button" data-card-action="show">${state.answerVisible ? "隐藏释义" : "显示释义"}</button>
        <button class="secondary-button" data-card-action="toggle-important">${word.important ? "取消重点" : "标重点"}</button>
        <button class="primary-button" data-card-action="remember">${progress.stage < 0 ? "记完" : "会了"}</button>
        <button class="secondary-button" data-card-action="fuzzy">模糊</button>
        <button class="danger-button" data-card-action="forgot">忘了</button>
      </div>
    </div>`;

  if (state.practiceMode === "dictation" && state.lastAutoSpokenId !== word.id) {
    state.lastAutoSpokenId = word.id;
    window.setTimeout(() => speakTerm(word.term, { silent: true }), 120);
  }
}

function renderTimeline() {
  const todayWords = state.words
    .filter(isTodayReview)
    .filter(wordMatchesActiveGroup)
    .sort((a, b) => activeModeProgress(a).nextReviewAt.localeCompare(activeModeProgress(b).nextReviewAt));

  if (!todayWords.length) {
    els.todayTimeline.innerHTML = `<div class="time-slot"><strong>今天</strong><div><span>暂无安排</span></div></div>`;
    return;
  }

  els.todayTimeline.innerHTML = todayWords.slice(0, 18).map((word) => `
    <div class="time-slot">
      <strong>${formatTime(activeModeProgress(word).nextReviewAt)}</strong>
      <div>
        <span>${escapeHTML(word.term)}</span>
        <span>${escapeHTML(word.meaning || word.phrase || "未填释义")}</span>
      </div>
    </div>`).join("");
}

function filteredWords() {
  const query = state.query.toLowerCase();
  return state.words
    .filter((word) => {
      const forms = verbForms(word);
      const text = [word.term, word.meaning, word.phrase, word.note, word.tag, forms.third, forms.past, forms.participle].join(" ").toLowerCase();
      const matchesQuery = !query || text.includes(query);
      const status = statusOf(word);
      const matchesFilter = state.filter === "all" || status === state.filter || (state.filter === "important" && word.important);
      return matchesQuery && matchesFilter && wordMatchesActiveGroup(word);
    })
    .sort((a, b) => {
      const statusDiff = Number(isDue(b)) - Number(isDue(a));
      if (statusDiff) {
        return statusDiff;
      }
      return (activeModeProgress(a).nextReviewAt || "9999").localeCompare(activeModeProgress(b).nextReviewAt || "9999");
    });
}

function renderWordList() {
  const words = filteredWords();
  if (!words.length) {
    els.wordList.innerHTML = `<div class="empty-card"><div><h3>词库是空的</h3><p>加入单词后会出现在这里</p></div></div>`;
    return;
  }

  els.wordList.innerHTML = words.map((word) => {
    const status = statusOf(word);
    const progress = activeModeProgress(word);
    return `
      <article class="word-row" data-id="${escapeHTML(word.id)}">
        <div>
          <strong>${escapeHTML(word.term)}</strong>
          <p>${escapeHTML(word.tag || "未标记")}</p>
        </div>
        <div>
          <p>${escapeHTML(word.meaning || "未填中文")}</p>
          <p>${escapeHTML(word.phrase || "")}</p>
        </div>
        <div>
          <span class="status-pill status-${status}">${statusLabel(status)}</span>
          ${word.important ? `<span class="status-pill status-important">重点</span>` : ""}
          <p>${formatDateTime(progress.nextReviewAt)}</p>
        </div>
        <div class="mini-actions">
          <button class="secondary-button" data-row-action="study">打开</button>
          <button class="secondary-button" data-row-action="important">${word.important ? "取消重点" : "重点"}</button>
          <button class="danger-button" data-row-action="delete">删</button>
        </div>
      </article>`;
  }).join("");
}

function clearForm() {
  els.wordForm.reset();
  els.termInput.focus();
}

function wordFromForm() {
  const now = new Date().toISOString();
  return normalizeWord({
    id: createId(),
    term: normalizeText(els.termInput.value),
    meaning: normalizeText(els.meaningInput.value),
    phrase: normalizeText(els.phraseInput.value),
    tag: normalizeText(els.tagInput.value),
    note: normalizeText(els.noteInput.value),
    forms: {
      third: normalizeText(els.thirdPersonInput.value),
      past: normalizeText(els.pastTenseInput.value),
      participle: normalizeText(els.pastParticipleInput.value),
    },
    status: "new",
    stage: -1,
    createdAt: now,
    updatedAt: now,
  });
}

function addWord(event) {
  event.preventDefault();
  const word = wordFromForm();
  if (!word.term) {
    return;
  }
  state.words.unshift(word);
  saveWords();
  clearForm();
  state.mode = "new";
  state.activeId = word.id;
  state.answerVisible = false;
  render();
  showToast("已加入词库");
}

function splitImportLine(line) {
  const trimmed = line.trim();
  if (!trimmed) {
    return null;
  }
  let parts = [];
  if (trimmed.includes("|")) {
    parts = trimmed.split("|");
  } else if (trimmed.includes("\t")) {
    parts = trimmed.split("\t");
  } else if (/\s[-—]\s/.test(trimmed)) {
    parts = trimmed.split(/\s[-—]\s/);
  } else {
    parts = trimmed.split(/[,，；;]/);
  }
  parts = parts.map(normalizeText).filter(Boolean);
  const hasForms = parts.length >= 6;
  return {
    term: parts[0] || trimmed,
    meaning: parts[1] || "",
    phrase: parts[2] || "",
    forms: hasForms ? {
      third: parts[3] || "",
      past: parts[4] || "",
      participle: parts[5] || "",
    } : emptyVerbForms(),
    note: (hasForms ? parts.slice(6) : parts.slice(3)).join("；"),
  };
}

function bulkAdd() {
  const lines = els.bulkInput.value.split(/\r?\n/).map(splitImportLine).filter(Boolean);
  if (!lines.length) {
    showToast("没有识别到单词");
    return;
  }
  const now = new Date().toISOString();
  const existing = new Set(state.words.map((word) => word.term.toLowerCase()));
  const created = lines
    .filter((item) => item.term && !existing.has(item.term.toLowerCase()))
    .map((item) => normalizeWord({
      id: createId(),
      term: item.term,
      meaning: item.meaning,
      phrase: item.phrase,
      forms: item.forms,
      note: item.note,
      tag: "导入",
      status: "new",
      stage: -1,
      createdAt: now,
      updatedAt: now,
    }));
  state.words = [...created, ...state.words];
  saveWords();
  els.bulkInput.value = "";
  state.mode = "new";
  state.activeId = created[0]?.id || state.activeId;
  state.answerVisible = false;
  render();
  showToast(`已加入 ${created.length} 个词条`);
}

function handleCardAction(action) {
  if (action === "new-mode") {
    setMode("new");
    return;
  }
  const word = activeWord();
  if (!word) {
    return;
  }
  if (action === "speak") {
    speakTerm(word.term);
    return;
  }
  if (action === "check-spelling") {
    const correct = isSpellingCorrect(state.spellingDraft, word);
    const completedAt = new Date().toISOString();
    state.spellingResult = { correct };
    state.answerVisible = true;
    recordModeHistory(word, {
      time: completedAt,
      result: correct ? "spell-correct" : "spell-wrong",
      nextReviewAt: modeProgress(word).nextReviewAt || "",
    });
    if (!correct) {
      word.important = true;
    }
    word.updatedAt = completedAt;
    saveWords();
    render();
    showToast(correct ? "拼对了" : "已标为重点，等会儿再听写");
    return;
  }
  if (action === "check-forms") {
    const correct = isVerbFormsCorrect(state.formDrafts, word);
    const completedAt = new Date().toISOString();
    state.formResult = { correct };
    state.answerVisible = true;
    recordModeHistory(word, {
      time: completedAt,
      result: correct ? "forms-correct" : "forms-wrong",
      nextReviewAt: modeProgress(word).nextReviewAt || "",
    });
    if (!correct) {
      word.important = true;
    }
    word.updatedAt = completedAt;
    saveWords();
    render();
    showToast(correct ? "变形拼对了" : "变形有错，已放进重点复盘");
    return;
  }
  if (action === "clear-spelling") {
    resetTypingState();
    state.answerVisible = false;
    renderActiveCard();
    return;
  }
  if (action === "show") {
    state.answerVisible = !state.answerVisible;
    renderActiveCard();
    return;
  }
  if (action === "toggle-important") {
    word.important = !word.important;
    word.updatedAt = new Date().toISOString();
    saveWords();
    render();
    showToast(word.important ? "已加入重点词" : "已取消重点");
    return;
  }
  if (["remember", "fuzzy", "forgot"].includes(action)) {
    const progress = activeModeProgress(word);
    scheduleNext(word, progress.stage < 0 && action === "remember" ? "new" : action);
    if (state.sprint.active) {
      state.sprint.completed += 1;
    }
    saveWords();
    state.answerVisible = false;
    resetTypingState();
    chooseActiveWord(true);
    render();
  }
}

function setMode(mode) {
  state.mode = mode;
  state.activeId = null;
  state.answerVisible = false;
  resetTypingState();
  state.lastAutoSpokenId = null;
  render();
}

function startSprint() {
  if (state.sprint.active) {
    endSprint();
    render();
    return;
  }
  const now = nowDate();
  state.sprint = {
    active: true,
    startedAt: now.toISOString(),
    endsAt: new Date(now.getTime() + 15 * 60 * 1000).toISOString(),
    completed: 0,
  };
  state.mode = "all";
  state.activeId = null;
  state.answerVisible = false;
  resetTypingState();
  state.lastAutoSpokenId = null;
  render();
  showToast("15分钟冲刺开始：到期 → 重点 → 新词");
}

function startNewWords() {
  const newWords = state.words.filter((word) => statusOf(word) === "new" && wordMatchesActiveGroup(word));
  if (!newWords.length) {
    showToast("没有新词了");
    return;
  }
  setMode("new");
}

function batchLearnNewWords() {
  const visibleNew = filteredWords().filter((word) => statusOf(word) === "new");
  const words = visibleNew.length ? visibleNew : state.words.filter((word) => statusOf(word) === "new" && wordMatchesActiveGroup(word));
  if (!words.length) {
    showToast("没有新词需要安排");
    return;
  }

  const scope = visibleNew.length === words.length && (state.query || state.filter !== "all") ? "当前筛选的新词" : "所有新词";
  if (!confirm(`把${scope}（${words.length} 个）全部标为已记完，并从现在开始安排 20 分钟后的第一次复习？`)) {
    return;
  }

  const completedAt = nowDate();
  words.forEach((word) => scheduleNext(word, "new", { completedAt, silent: true }));
  saveWords();
  state.mode = "due";
  state.activeId = null;
  state.answerVisible = false;
  render();
  showToast(`已安排 ${words.length} 个新词：${formatDateTime(activeModeProgress(words[0]).nextReviewAt)} 复习`);
}

function deleteWord(id) {
  const word = state.words.find((item) => item.id === id);
  if (!word) {
    return;
  }
  if (!confirm(`删除「${word.term}」？`)) {
    return;
  }
  state.words = state.words.filter((item) => item.id !== id);
  saveWords();
  if (state.activeId === id) {
    state.activeId = null;
  }
  render();
  showToast("已删除");
}

function exportWords() {
  const payload = {
    app: "专升本单词记忆",
    version: 1,
    reviewSteps: REVIEW_STEPS.map((step) => step.label),
    exportedAt: new Date().toISOString(),
    words: state.words,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `专升本单词词库-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importWords(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const incoming = Array.isArray(parsed) ? parsed : parsed.words;
    if (!Array.isArray(incoming)) {
      throw new Error("Invalid file");
    }
    const records = incoming.map(normalizeWord);
    const replace = confirm("确定替换当前词库？取消则合并导入。");
    if (replace) {
      state.words = records;
    } else {
      const ids = new Set(state.words.map((word) => word.id));
      state.words = [...records.filter((word) => !ids.has(word.id)), ...state.words];
    }
    saveWords();
    state.activeId = null;
    render();
    showToast("导入完成");
  } catch {
    showToast("导入失败，请选择正确的词库文件");
  } finally {
    event.target.value = "";
  }
}

function planText() {
  const items = state.words
    .filter(wordMatchesActiveGroup)
    .filter(isTodayReview)
    .sort((a, b) => activeModeProgress(a).nextReviewAt.localeCompare(activeModeProgress(b).nextReviewAt));
  if (!items.length) {
    return "今天暂无单词复习安排。";
  }
  return items.map((word) => `${formatTime(activeModeProgress(word).nextReviewAt)}  ${word.term}  ${word.meaning || word.phrase || ""}`).join("\n");
}

async function copyPlan() {
  const text = planText();
  try {
    await navigator.clipboard.writeText(text);
    showToast("今日计划已复制");
  } catch {
    showToast(text);
  }
}

function wireEvents() {
  els.wordForm.addEventListener("submit", addWord);
  els.clearFormButton.addEventListener("click", clearForm);
  els.bulkAddButton.addEventListener("click", bulkAdd);
  els.clearBulkButton.addEventListener("click", () => {
    els.bulkInput.value = "";
    els.bulkInput.focus();
  });
  els.activeCard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-card-action]");
    if (button) {
      handleCardAction(button.dataset.cardAction);
    }
  });
  els.activeCard.addEventListener("input", (event) => {
    if (event.target.matches("[data-spell-input]")) {
      state.spellingDraft = event.target.value;
      state.spellingResult = null;
    }
    if (event.target.matches("[data-form-input]")) {
      state.formDrafts[event.target.dataset.formInput] = event.target.value;
      state.formResult = null;
    }
  });
  els.activeCard.addEventListener("keydown", (event) => {
    if (event.target.matches("[data-spell-input]") && event.key === "Enter") {
      event.preventDefault();
      handleCardAction("check-spelling");
    }
    if (event.target.matches("[data-form-input]") && event.key === "Enter") {
      event.preventDefault();
      handleCardAction("check-forms");
    }
  });
  els.wordList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-row-action]");
    if (!button) {
      return;
    }
    const row = button.closest("[data-id]");
    if (!row) {
      return;
    }
    if (button.dataset.rowAction === "study") {
      state.mode = "all";
      state.activeId = row.dataset.id;
      state.answerVisible = false;
      resetTypingState();
      state.lastAutoSpokenId = null;
      render();
    }
    if (button.dataset.rowAction === "important") {
      const word = state.words.find((item) => item.id === row.dataset.id);
      if (word) {
        word.important = !word.important;
        word.updatedAt = new Date().toISOString();
        saveWords();
        render();
      }
    }
    if (button.dataset.rowAction === "delete") {
      deleteWord(row.dataset.id);
    }
  });
  els.groupProgress.addEventListener("click", (event) => {
    const card = event.target.closest('[data-group-action="study"]');
    if (!card) {
      return;
    }
    state.activeGroup = card.dataset.group || "all";
    state.activeId = null;
    state.answerVisible = false;
    resetTypingState();
    state.lastAutoSpokenId = null;
    render();
    showToast(state.activeGroup === "all" ? "已切回全部 Word List" : `只背 ${state.activeGroup}`);
  });
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderWordList();
  });
  els.statusFilter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderWordList();
  });
  els.importButton.addEventListener("click", () => els.importInput.click());
  els.importInput.addEventListener("change", importWords);
  els.exportButton.addEventListener("click", exportWords);
  els.copyPlanButton.addEventListener("click", copyPlan);
  els.examDateInput.addEventListener("change", (event) => {
    state.settings.examDate = event.target.value || defaultExamDate();
    saveSettings();
    renderDashboard();
  });
  els.dictationOrderSelect?.addEventListener("change", (event) => {
    state.dictationOrder = event.target.value;
    state.activeId = null;
    state.answerVisible = false;
    resetTypingState();
    state.lastAutoSpokenId = null;
    render();
  });
  document.querySelectorAll("[data-practice-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.practiceMode = button.dataset.practiceMode;
      state.answerVisible = false;
      resetTypingState();
      state.lastAutoSpokenId = null;
      render();
    });
  });
  els.startNewButton.addEventListener("click", startNewWords);
  els.batchLearnButton.addEventListener("click", batchLearnNewWords);
  els.sprintButton.addEventListener("click", startSprint);
  els.focusDueButton.addEventListener("click", () => setMode("due"));
  els.dueModeButton.addEventListener("click", () => setMode("due"));
  els.newModeButton.addEventListener("click", () => setMode("new"));
  els.allModeButton.addEventListener("click", () => setMode("all"));
}

wireEvents();
render();
persistBuiltinWordsIfNeeded();
setInterval(() => {
  renderClock();
  renderStats();
  renderDashboard();
  renderTimeline();
  renderGroupProgress();
  renderSprintStatus();
  renderDailyReport();
}, 30 * 1000);
