const makePhoto = (label, from, to) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${from}" />
          <stop offset="1" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="900" height="560" fill="url(#g)" />
      <circle cx="720" cy="120" r="150" fill="rgba(255,255,255,.18)" />
      <circle cx="150" cy="470" r="190" fill="rgba(255,255,255,.14)" />
      <text x="60" y="460" fill="white" font-size="54" font-family="Arial, sans-serif" font-weight="700">${label}</text>
    </svg>
  `)}`;

const profiles = {
  liumer: {
    name: "小留 Liumer",
    avatar: "6",
    color: "#de3d31",
    role: "AI 暖場助手",
    school: "留了么平台",
    level: "官方助手",
    credibility: "整合公開資料與平台精選回答，負責先給方向、不代替真人經驗。",
    badges: ["官方", "暖場", "資料整理"],
  },
  bella: {
    name: "Bella",
    avatar: "B",
    color: "#0f7773",
    role: "準備赴港留學生",
    school: "即將入讀香港城市大學",
    level: "Lv.2 探路小留",
    credibility: "正在比較不同地區租房，會整理看房和簽約問題。",
    badges: ["租房中", "新生", "高互動"],
  },
  jason: {
    name: "Jason",
    avatar: "J",
    color: "#315f9f",
    role: "租房實測官",
    school: "香港理工大學 Year 4",
    level: "Lv.5 社群嚮導",
    credibility: "過去兩年幫 30+ 位同學檢查租房條款，回答採納率 82%。",
    badges: ["租房避坑", "高採納", "已認證"],
  },
  ken: {
    name: "Ken",
    avatar: "K",
    color: "#be8327",
    role: "畢業生",
    school: "嶺南大學 2026 屆",
    level: "Lv.4 小留夥伴",
    credibility: "正在整理畢業搬家、二手交易和求職交接攻略。",
    badges: ["畢業二手", "職場新人", "真實賣家"],
  },
  mia: {
    name: "Mia",
    avatar: "M",
    color: "#7c4fa3",
    role: "二手交易活躍用戶",
    school: "香港浸會大學 Year 3",
    level: "Lv.3 實測小留",
    credibility: "完成 18 次平台內二手交易，零投訴。",
    badges: ["二手交易", "可信賣家", "生活用品"],
  },
  lingU: {
    name: "LingU Year 3",
    avatar: "L",
    color: "#3f7748",
    role: "學長姐",
    school: "嶺南大學 Year 3",
    level: "Lv.4 小留夥伴",
    credibility: "曾獲兩段本地實習 offer，擅長 CV、面試和校園資源。",
    badges: ["CV", "實習", "學長姐"],
  },
  rain: {
    name: "小雨",
    avatar: "雨",
    color: "#d35f45",
    role: "內地來港留學生",
    school: "香港中文大學 Year 2",
    level: "Lv.3 實測小留",
    credibility: "常組織文化活動與 Citywalk，喜歡把路線做成清單。",
    badges: ["文化活動", "Citywalk", "社交"],
  },
  hkuPeer: {
    name: "HKU Ada",
    avatar: "H",
    color: "#2455a6",
    role: "港大學姐",
    school: "香港大學 Year 3",
    level: "Lv.4 小留夥伴",
    credibility: "熟悉港大選課、圖書館、自習空間和港島生活路線。",
    badges: ["港大 HKU", "選課", "港島生活"],
  },
  cuhkPeer: {
    name: "CUHK Sean",
    avatar: "中",
    color: "#6b3fa0",
    role: "中大學長",
    school: "香港中文大學 Year 4",
    level: "Lv.5 社群嚮導",
    credibility: "常回答書院生活、校巴、宿舍和新界交通問題。",
    badges: ["中大 CUHK", "書院", "校巴"],
  },
  ustPeer: {
    name: "UST Chloe",
    avatar: "科",
    color: "#1b7a8f",
    role: "科大研究生",
    school: "香港科技大學 MSc",
    level: "Lv.3 實測小留",
    credibility: "擅長科大宿舍、清水灣生活和研究生申請經驗。",
    badges: ["科大 HKUST", "研究生", "宿舍"],
  },
  cityuPeer: {
    name: "CityU Ryan",
    avatar: "城",
    color: "#b14b3b",
    role: "城大學長",
    school: "香港城市大學 Year 3",
    level: "Lv.3 實測小留",
    credibility: "熟悉九龍塘生活圈、實習資訊和校園設施。",
    badges: ["城大 CityU", "九龍塘", "實習"],
  },
  polyuPeer: {
    name: "PolyU Wing",
    avatar: "理",
    color: "#a12b55",
    role: "理大學姐",
    school: "香港理工大學 Year 4",
    level: "Lv.4 小留夥伴",
    credibility: "常分享紅磡租房、理大課業和求職準備。",
    badges: ["理大 PolyU", "紅磡", "求職"],
  },
  hkbuPeer: {
    name: "HKBU Iris",
    avatar: "浸",
    color: "#c28a24",
    role: "浸大同學",
    school: "香港浸會大學 Year 2",
    level: "Lv.3 實測小留",
    credibility: "熟悉九龍塘與浸會周邊飲食、校園活動和傳理資源。",
    badges: ["浸大 HKBU", "傳理", "活動"],
  },
  codemate: {
    name: "CodeMate Anson",
    avatar: "AI",
    color: "#0f7773",
    role: "Vibe Coding 共學發起人",
    school: "香港科技大學 MSc",
    level: "Lv.4 小留夥伴",
    credibility: "組織過 6 次學生 AI 共創夜，擅長把生活痛點拆成可以快速驗證的小工具。",
    badges: ["AI 共學", "Vibe Coding", "作品實測"],
  },
  me: {
    name: "我",
    avatar: "我",
    color: "#191715",
    role: "內地來港留學生",
    school: "嶺南大學",
    level: "Lv.1 新來小留",
    credibility: "希望幫後來的同學少走彎路，也找到真正屬於自己的香港生活。",
    badges: ["校園身份待認證", "住宿實測官", "飲食地圖", "公共及智慧管理"],
  },
};

const seedQuestions = [
  {
    title: "零基礎也能參加嗎？想在香港組一個 Vibe Coding 共學小組",
    topic: "AI 共學圈",
    body: "我不是計算機專業，但想用 AI 做一個解決校園生活問題的小工具。希望找不同學校的同學，每週一起做一次小迭代，也交流 Prompt 和測試方法。",
    authorId: "codemate",
    answers: 21,
    points: 180,
    photos: [makePhoto("Vibe Coding 共創夜", "#0f7773", "#315f9f")],
    comments: [
      { authorId: "liumer", body: "可以先從一個很窄的問題開始，例如整理選課衝堂、活動報名或二手交收。AI 可以加速製作，但仍要找真實同學測試。", photos: [] },
      { authorId: "codemate", body: "我們會分成提問題、做原型、找同學測試三種角色，不要求每個人都會寫程式。第一晚目標只是做出一個能點的版本。", photos: [makePhoto("學生 AI 原型", "#315f9f", "#be8327")] },
      { authorId: "hkbuPeer", body: "傳理或設計背景也很需要，因為很多 AI 小工具失敗不是技術問題，而是沒有把使用場景和提示文字說清楚。", photos: [] },
    ],
  },
  {
    title: "用 AI 做了選課助手，怎樣避免它一本正經地推薦錯課？",
    topic: "AI 共學圈",
    body: "正在做一個香港高校選課原型，最擔心 AI 忽略先修要求、把不同學期課程混在一起，或者把網上過期資料當成最新規則。想聽大家的測試方法。",
    authorId: "me",
    answers: 17,
    points: 165,
    photos: [makePhoto("AI 選課測試", "#de3d31", "#0f7773")],
    comments: [
      { authorId: "codemate", body: "把硬性規則和生成式建議分開：先用規則引擎檢查先修、學分和衝堂，再讓 AI 解釋與排序。每條結論都要顯示資料來源和更新日期。", photos: [] },
      { authorId: "hkuPeer", body: "最好讓學生看見 AI 為什麼推薦，也提供一鍵回報錯誤。正式選課前再跳一次提示，要求回到學校官方系統確認。", photos: [] },
      { authorId: "liumer", body: "留了麼的做法是規則先行、AI 排序、同校經驗補充；不登入教務系統，也不替學生提交選課。", photos: [] },
    ],
  },
  {
    title: "港大同學：港島上課日怎樣安排自習和晚飯最順？",
    topic: "港大 HKU",
    body: "想找一條從課室、圖書館、晚飯到地鐵都比較順的日常路線。",
    authorId: "hkuPeer",
    answers: 14,
    points: 120,
    photos: [makePhoto("HKU 港島路線", "#2455a6", "#0f7773")],
    comments: [
      { authorId: "liumer", body: "高校圈會優先展示使用學校郵箱認證過的經驗，適合判斷校園設施、通勤和周邊生活。", photos: [] },
      { authorId: "hkuPeer", body: "如果晚上還要回港島線，建議先在圖書館完成自習，再去西營盤或堅尼地城吃飯。", photos: [] },
    ],
  },
  {
    title: "中大新生：書院、校巴、宿舍生活有什麼要先知道？",
    topic: "中大 CUHK",
    body: "第一次看到中大校園地圖有點迷，想知道日常移動和書院生活怎樣適應。",
    authorId: "cuhkPeer",
    answers: 16,
    points: 130,
    photos: [makePhoto("CUHK 書院生活", "#6b3fa0", "#315f9f")],
    comments: [
      { authorId: "cuhkPeer", body: "先熟悉校巴路線和上課地點，不同書院生活節奏不太一樣，最好找同書院學長姐問。", photos: [] },
    ],
  },
  {
    title: "科大同學：清水灣生活和宿舍申請有哪些實測建議？",
    topic: "科大 HKUST",
    body: "想了解科大附近生活便利程度、宿舍申請和週末出行。",
    authorId: "ustPeer",
    answers: 10,
    points: 115,
    photos: [makePhoto("HKUST 清水灣", "#1b7a8f", "#be8327")],
    comments: [
      { authorId: "ustPeer", body: "科大風景很好，但出行要預留交通時間。宿舍申請資料要早準備，尤其是研究生。", photos: [] },
    ],
  },
  {
    title: "城大同學：九龍塘附近有什麼適合課後休息的地方？",
    topic: "城大 CityU",
    body: "想找離學校近、能吃飯也能短暫自習的地方。",
    authorId: "cityuPeer",
    answers: 8,
    points: 100,
    photos: [makePhoto("CityU 九龍塘", "#b14b3b", "#315f9f")],
    comments: [
      { authorId: "cityuPeer", body: "Festival Walk 很方便，但高峰期人多。想安靜可以回校內找空教室或圖書館。", photos: [] },
    ],
  },
  {
    title: "理大同學：紅磡租房和通勤如何避坑？",
    topic: "理大 PolyU",
    body: "預算有限，希望離學校不要太遠，也想知道紅磡附近看房注意事項。",
    authorId: "polyuPeer",
    answers: 13,
    points: 140,
    photos: [makePhoto("PolyU 紅磡租房", "#a12b55", "#de3d31")],
    comments: [
      { authorId: "polyuPeer", body: "紅磡方便但樓齡差異大，看房一定要檢查水壓、窗戶、冷氣和合約維修責任。", photos: [] },
    ],
  },
  {
    title: "浸大同學：傳理和校園活動資源怎樣用起來？",
    topic: "浸大 HKBU",
    body: "想了解浸大有什麼適合留學生參與的活動和資源。",
    authorId: "hkbuPeer",
    answers: 9,
    points: 105,
    photos: [makePhoto("HKBU 校園活動", "#c28a24", "#7c4fa3")],
    comments: [
      { authorId: "hkbuPeer", body: "浸大活動很多，建議關注學會和院系郵件。傳理相關資源也很適合做作品集。", photos: [] },
    ],
  },
  {
    title: "嶺南同學有沒有推薦的安靜自習位和晚飯路線？",
    topic: "嶺南 LU",
    body: "想找一條下課後可以直接自習、吃飯、回宿舍的路線，最好是同校同學實測過的。",
    authorId: "me",
    answers: 7,
    points: 110,
    photos: [makePhoto("同校生活路線", "#315f9f", "#0f7773")],
    comments: [
      { authorId: "liumer", body: "高校圈會優先展示使用學校郵箱認證過的回覆，適合判斷路線、課程、宿舍和校園資源。", photos: [] },
      { authorId: "lingU", body: "圖書館高層比較安靜，晚飯可以走去富泰，回宿舍也順路。", photos: [makePhoto("校園自習位", "#0f7773", "#be8327")] },
    ],
  },
  {
    title: "第一次來香港讀書，哪些事情一定要提前準備？",
    topic: "留學生話題",
    body: "我 8 月來香港，想知道電話卡、銀行、八達通、入境文件和學校報到有什麼容易漏掉的地方。",
    authorId: "bella",
    answers: 11,
    points: 140,
    photos: [makePhoto("新生到港清單", "#de3d31", "#be8327")],
    comments: [
      { authorId: "liumer", body: "先把到港後 72 小時拆成三件事：住處入住、通訊開通、校園報到。其他事情可以分批處理。", photos: [] },
      { authorId: "lingU", body: "建議先辦好能收短信的電話卡，銀行和很多學校服務都會用到。", photos: [makePhoto("校園報到", "#315f9f", "#0f7773")] },
    ],
  },
  {
    title: "租房避坑：屯門、紅磡、太子哪裡更適合留學生？",
    topic: "租房避坑",
    body: "預算 6500-8500 港幣，希望通勤不太痛苦，也想知道簽約前要看什麼。",
    authorId: "bella",
    answers: 18,
    points: 180,
    photos: [makePhoto("租房地區比較", "#0f7773", "#315f9f")],
    comments: [
      { authorId: "liumer", body: "看房時先確認水電網、押金條款、能否轉租和退租扣款。距離地鐵近不等於晚上回家舒服。", photos: [] },
      { authorId: "jason", body: "太子生活方便但房子舊，紅磡去港島方便，屯門空間大但通勤時間要算清楚。", photos: [makePhoto("看房檢查表", "#315f9f", "#be8327")] },
    ],
  },
  {
    title: "畢業搬走，有哪些二手物品最容易出？",
    topic: "畢業二手",
    body: "準備畢業回內地，想把顯示器、椅子、小冰箱和教材出掉，求定價建議。",
    authorId: "ken",
    answers: 9,
    points: 120,
    photos: [makePhoto("畢業二手清單", "#be8327", "#de3d31")],
    comments: [
      { authorId: "liumer", body: "二手交易最好標清楚交收地點、可否試用、購買時間和瑕疵。大型物品可優先約宿舍或地鐵交收。", photos: [] },
      { authorId: "mia", body: "顯示器和人體工學椅最好出，小冰箱看宿舍政策，教材通常要按課程群賣。", photos: [makePhoto("二手交收", "#7c4fa3", "#0f7773")] },
    ],
  },
  {
    title: "想申請本地實習，內地背景要怎樣整理 CV？",
    topic: "升學就業",
    body: "已有一些社團和課程項目，但不知道香港公司更看重什麼。",
    authorId: "lingU",
    answers: 5,
    points: 100,
    photos: [],
    comments: [
      { authorId: "liumer", body: "把經歷改成成果句：做了什麼、服務誰、結果如何。香港招聘很看重清楚和可驗證。", photos: [] },
    ],
  },
  {
    title: "有沒有適合第一次約本地同學去的文化活動？",
    topic: "融入香港",
    body: "想找一個不尷尬、可以邊看邊聊的地方，最好交通方便。",
    authorId: "rain",
    answers: 12,
    points: 160,
    photos: [makePhoto("文化活動路線", "#d35f45", "#315f9f")],
    comments: [
      { authorId: "liumer", body: "M+、大館和西九海濱都適合。重點不是景點本身，而是活動後留一段輕鬆聊天時間。", photos: [] },
    ],
  },
  {
    title: "港大研究生：晚上十點後還想自習，港島有什麼安全又方便的選擇？",
    topic: "港大 HKU",
    body: "有幾天要在實驗室或圖書館待到比較晚，想知道離港大不遠、回宿舍或地鐵都順的自習和晚餐安排。",
    authorId: "bella",
    answers: 8,
    points: 110,
    photos: [makePhoto("HKU 夜間自習", "#2455a6", "#3f7748")],
    comments: [
      { authorId: "hkuPeer", body: "港大校內晚上有些閱讀空間仍開放，但先確認學期中的關門時間。若要吃飯再回港鐵，西營盤一帶會比直接跑中環省時間。", photos: [] },
      { authorId: "rain", body: "晚間移動我會把充電、雨具和最後一班車時間一起看。尤其下雨天，港島斜路走起來比地圖顯示的累。", photos: [makePhoto("港島夜間路線", "#315f9f", "#d35f45")] },
    ],
  },
  {
    title: "中大新生：第一次從校園去沙田和大埔採買，怎樣安排最省力？",
    topic: "中大 CUHK",
    body: "想一次買齊床品、生活用品和電話卡，又怕剛來不熟校巴和火車轉乘，求同學分享實測路線。",
    authorId: "rain",
    answers: 9,
    points: 115,
    photos: [makePhoto("CUHK 新生採買", "#6b3fa0", "#be8327")],
    comments: [
      { authorId: "cuhkPeer", body: "先用一個下午熟悉校巴站，再從大學站出去會安心很多。大型用品建議分兩次買，第一次先解決床品、插線板和日用品。", photos: [] },
      { authorId: "bella", body: "我會先在地圖收藏超市、藥房和銀行的位置，到現場只按清單走。新生那週不要把所有事情塞在同一天。", photos: [] },
    ],
  },
  {
    title: "科大授課型碩士：清水灣週末想放鬆，去哪裡不會花太多通勤時間？",
    topic: "科大 HKUST",
    body: "平日作業比較密集，週末想去海邊或市區換個環境，但不想把大半天都花在交通上。",
    authorId: "ustPeer",
    answers: 7,
    points: 105,
    photos: [makePhoto("清水灣週末", "#1b7a8f", "#315f9f")],
    comments: [
      { authorId: "lingU", body: "可以把週末拆成近距離半日和進市區整日兩種。想恢復精神就留在清水灣一帶，真的要去市區就把採買、朋友見面排在同一天。", photos: [] },
      { authorId: "ustPeer", body: "我通常會先看天氣和巴士等候時間，再決定去將軍澳或留在校園附近。考試前一週就別安排太遠的行程。", photos: [makePhoto("科大週末規劃", "#0f7773", "#be8327")] },
    ],
  },
  {
    title: "城大同學：九龍塘附近有適合小組開會、又不會太貴的地方嗎？",
    topic: "城大 CityU",
    body: "課程常要四五個人臨時碰面，想找可以討論、不必每人點很貴餐點，也方便同學從不同線回家的地方。",
    authorId: "cityuPeer",
    answers: 11,
    points: 120,
    photos: [],
    comments: [
      { authorId: "hkbuPeer", body: "九龍塘高峰時段很擠，如果是認真開會，先訂好校內討論室會比在商場找位穩。開完再去附近吃飯，大家壓力小很多。", photos: [] },
      { authorId: "cityuPeer", body: "小組合作最好一開始就約好誰訂房、誰整理檔案。空間只是其中一部分，留學生小組最怕的是溝通工具不一致。", photos: [makePhoto("九龍塘小組會議", "#b14b3b", "#c28a24")] },
    ],
  },
  {
    title: "理大同學：紅磡附近健身、洗衣和日用品有哪些省錢做法？",
    topic: "理大 PolyU",
    body: "住在紅磡一帶但不太熟生活成本，想把洗衣、運動和日常採買控制在學生預算內。",
    authorId: "polyuPeer",
    answers: 10,
    points: 125,
    photos: [makePhoto("紅磡學生生活", "#a12b55", "#be8327")],
    comments: [
      { authorId: "jason", body: "先分清楚哪些一定要在樓下解決，哪些可以每週集中買。洗衣和清潔用品常有包裝差異，和室友一起分裝會比單買划算。", photos: [] },
      { authorId: "polyuPeer", body: "運動的話我會優先用校內資源，再看離住處步行可到的地方。紅磡生活機能夠，但不要因為方便就每天外食。", photos: [] },
    ],
  },
  {
    title: "浸大同學：剛來九龍塘，怎樣找到語言交換和作品集合作夥伴？",
    topic: "浸大 HKBU",
    body: "我想練廣東話，也想認識對拍片、設計或傳播專題有興趣的人，不知道從哪些校園活動開始比較自然。",
    authorId: "hkbuPeer",
    answers: 12,
    points: 130,
    photos: [makePhoto("HKBU 語言交換", "#c28a24", "#7c4fa3")],
    comments: [
      { authorId: "rain", body: "先從一小時、主題明確的語言交換開始最不尷尬，例如一起逛展、拍一段校園短片或交換各自城市的歌單。", photos: [] },
      { authorId: "hkbuPeer", body: "作品集合作要先把時間表和署名方式說清楚。校園活動是認識人很好的入口，但真正能長期合作還是看交付習慣。", photos: [makePhoto("作品集合作", "#7c4fa3", "#315f9f")] },
    ],
  },
  {
    title: "嶺南新生：屯門到市區的交通怎樣安排，才不會每天都很累？",
    topic: "嶺南 LU",
    body: "課程和活動有時在市區，想知道怎樣把校巴、西鐵和回宿舍時間排得更穩，尤其是晚上回來的情況。",
    authorId: "me",
    answers: 13,
    points: 135,
    photos: [makePhoto("嶺南通勤安排", "#315f9f", "#0f7773")],
    comments: [
      { authorId: "lingU", body: "最實用的是把固定要進市區的日子集中，不要為了一件小事來回跑。晚上有活動時先查最後一段接駁，再決定能不能留下。", photos: [] },
      { authorId: "ken", body: "我畢業前常在市區面試，會把備用充電、雨傘和一套能直接去活動的衣服放包裡，少一次折返就輕鬆很多。", photos: [] },
    ],
  },
  {
    title: "到港第一週：開銀行帳戶、辦電話卡和買八達通，順序怎樣排最穩？",
    topic: "留學生話題",
    body: "已經拿到宿舍鑰匙，想在第一週完成最重要的生活設定，但不確定哪些服務需要香港電話號碼或地址證明。",
    authorId: "bella",
    answers: 17,
    points: 150,
    photos: [makePhoto("第一週生活設定", "#de3d31", "#0f7773")],
    comments: [
      { authorId: "liumer", body: "先處理可聯絡性，再處理支付和銀行。把護照、入境文件、住址證明和學校文件放在同一個資料夾，到現場會省很多時間。", photos: [] },
      { authorId: "hkuPeer", body: "不同銀行對地址和學生文件要求不完全一樣，出發前先查官方清單。第一次到分行最好預留等候時間，不要排在報到前一小時。", photos: [] },
    ],
  },
  {
    title: "租房避坑：提前退租或換室友時，按金怎樣談才不會吃虧？",
    topic: "租房避坑",
    body: "合約還有幾個月，但室友想搬走。想知道找替代租客、通知業主和保留按金紀錄時有哪些關鍵步驟。",
    authorId: "jason",
    answers: 15,
    points: 170,
    photos: [makePhoto("按金與退租", "#0f7773", "#d35f45")],
    comments: [
      { authorId: "jason", body: "先把合約中提前終止、轉租和按金條款拍清楚，再用文字和業主確認每一步。口頭說可以不代表之後不會有爭議。", photos: [] },
      { authorId: "bella", body: "如果要找新室友，交接前最好一起拍水電錶、家具狀態和鑰匙數量。這些小紀錄到退按金時會非常有用。", photos: [makePhoto("退租交接紀錄", "#315f9f", "#be8327")] },
    ],
  },
  {
    title: "畢業二手：想收一批學長姐家具，怎樣看狀態和安排搬運？",
    topic: "畢業二手",
    body: "剛搬進校外合租，想收桌子、檯燈和收納櫃，但沒有經驗判斷尺寸、瑕疵和送貨成本。",
    authorId: "mia",
    answers: 14,
    points: 145,
    photos: [makePhoto("二手家具交收", "#7c4fa3", "#be8327")],
    comments: [
      { authorId: "ken", body: "先量房門、電梯和放置位置，再談價格。很多家具本身便宜，但上樓和搬運才是成本，千萬不要到現場才發現進不了門。", photos: [] },
      { authorId: "mia", body: "我會要求賣家拍近距離細節和使用痕跡，面交時再確認螺絲、抽屜和插座。能當場試的就不要只看照片。", photos: [] },
    ],
  },
  {
    title: "想找香港暑期實習：沒有本地經驗時，怎樣準備第一輪面試？",
    topic: "升學就業",
    body: "投了幾份實習但還沒收到回覆，想知道英文自我介紹、粵語要求和案例題應該怎樣準備才不會太空泛。",
    authorId: "lingU",
    answers: 16,
    points: 175,
    photos: [makePhoto("香港實習準備", "#3f7748", "#315f9f")],
    comments: [
      { authorId: "lingU", body: "先準備三個能量化的經驗故事：解決什麼問題、你做了什麼、結果如何。沒有本地實習也可以用課程專題、社團或志願服務來說。", photos: [] },
      { authorId: "polyuPeer", body: "粵語不是每個職位的硬門檻，但要誠實說明程度。面試前把職位描述裡反覆出現的能力詞換成自己的案例，比背標準答案更有效。", photos: [makePhoto("面試案例準備", "#a12b55", "#0f7773")] },
    ],
  },
  {
    title: "想融入香港：有沒有適合一個人參加、又容易認識人的週末活動？",
    topic: "融入香港",
    body: "不太想硬湊社交局，但希望慢慢認識本地同學和不同學校的朋友，偏好展覽、市集、城市散步或運動活動。",
    authorId: "rain",
    answers: 19,
    points: 165,
    photos: [makePhoto("週末城市探索", "#d35f45", "#315f9f")],
    comments: [
      { authorId: "hkbuPeer", body: "選有共同任務的活動最自然，例如導賞、志工、市集工作坊或桌遊。活動結束後留十五分鐘喝東西，比一開始就要求大家自我介紹舒服。", photos: [] },
      { authorId: "rain", body: "我會優先挑交通方便、能隨時離開的活動，這樣一個人去壓力小。去了兩三次後，反而比較容易遇到固定會再見面的人。", photos: [makePhoto("香港週末社交", "#d35f45", "#be8327")] },
    ],
  },
];

const events = [
  { title: "Vibe Coding 校園共創夜", tag: "AI 共學", body: "不同專業同學組隊，用 AI 在兩小時內做出一個可點的校園生活工具；零程式基礎也可以參加。", reward: "到場簽到 +60", seats: "剩 18 位", sponsor: "校園創新中心合作名額" },
  { title: "M+ 週末導賞團", tag: "文化融入", body: "專業講解員帶隊，活動後有小組咖啡交流。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "剩 8 位", sponsor: "文化機構合作名額" },
  { title: "深水埗飲食地圖 Walk", tag: "本地生活", body: "本地同學帶路，整理真實避坑清單。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "剩 12 位", sponsor: "校園周邊餐飲夥伴支持" },
  { title: "升學求職問答夜", tag: "升學就業", body: "畢業生、學長姐和行業嘉賓一起答疑。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "剩 20 位", sponsor: "學校職涯夥伴支持" },
  { title: "租房合約檢查工作坊", tag: "租房避坑", body: "用真實案例拆解按金、退租、維修和中介條款。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "剩 15 位", sponsor: "學生生活服務夥伴支持" },
  { title: "大館夜間文化路線", tag: "城市探索", body: "用兩小時了解中環歷史，適合新生和本地同學組隊。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "剩 10 位", sponsor: "文化機構合作名額" },
  { title: "畢業二手交換日", tag: "二手交易", body: "現場交換家電、教材和生活用品，平台提供交易標籤。學生可免費報名，到場後簽到。", reward: "到場簽到 +60", seats: "開放報名", sponsor: "校園社群場地支持" },
];

const storeItems = [
  { title: "小留限定貼紙包", tag: "校園文創", body: "一組可寄送的防水貼紙，為你的筆電或水樽留一個在港讀書的記號。", cost: 100, requiresVerification: true, sponsor: "留了麼社群提供" },
  { title: "新生咖啡券", tag: "在地生活", body: "合作咖啡店 HK$20 電子券；適合約一位新同學把線上答案聊成朋友。", cost: 180, requiresVerification: true, sponsor: "校園周邊咖啡夥伴贊助" },
  { title: "租房合約逐條檢查包", tag: "租房", body: "含看房、簽約、退租三階段清單，以及一次線上重點提問機會。", cost: 260, requiresVerification: true, sponsor: "學生生活服務夥伴支持" },
  { title: "小留校園帆布袋", tag: "校園文創", body: "實體小留帆布袋，於合作校園活動或指定活動現場領取。", cost: 320, requiresVerification: true, sponsor: "校園合作計畫提供" },
  { title: "畢業二手置頂券", tag: "二手", body: "一張 7 天置頂券，讓教材、家具或電器被更快看見。", cost: 380, requiresVerification: true, sponsor: "留了麼社群提供" },
  { title: "文化導賞優先名額", tag: "活動", body: "在熱門導賞滿額前保留一個學生優先位，限指定在地活動使用。", cost: 480, requiresVerification: true, sponsor: "文化機構合作名額" },
  { title: "20 分鐘 CV 快速診斷", tag: "求職", body: "由有實習或求職經驗的學長姐，針對一份履歷提供可執行的修改方向。", cost: 650, requiresVerification: true, sponsor: "學校職涯夥伴支持" },
  { title: "雙人社群導賞名額", tag: "城市探索", body: "邀請一位同學同行，參加指定文化路線；適合把新朋友帶進真實香港。", cost: 900, requiresVerification: true, sponsor: "文化機構合作名額" },
];

const partnerPlacements = [
  {
    name: "校園周邊咖啡夥伴",
    category: "合作示例 · 咖啡館",
    title: "用一杯咖啡，把剛到香港的陌生感慢慢聊開。",
    body: "完成校園認證的同學可領取 HK$20 咖啡禮遇，適合和新認識的同學交換第一份在港生活清單。",
    offer: "校園認證學生首杯 HK$20 禮遇",
    sponsor: "合作夥伴付費支持社群服務與學生福利",
  },
  {
    name: "城市餐飲探索夥伴",
    category: "合作示例 · 餐飲",
    title: "把校園附近的第一頓好飯，變成認識這座城市的起點。",
    body: "學生套餐與雙人分享禮遇，讓課後聚餐不只填飽肚子，也讓不同背景的同學自然坐到同一張桌前。",
    offer: "校園認證學生雙人套餐禮遇",
    sponsor: "合作夥伴付費支持社群服務與學生福利",
  },
  {
    name: "文化探索夥伴",
    category: "合作示例 · 博物館 / 藝文",
    title: "用一場展覽，打開屬於你自己的香港文化地圖。",
    body: "指定導賞與展覽活動保留學生優先名額，讓剛來香港的同學更容易把城市探索排進日常。",
    offer: "校園認證學生文化導賞優先位",
    sponsor: "合作夥伴付費支持社群服務與學生福利",
  },
];

const memberLevels = [
  { level: "Lv.1 新來小留", standard: "0-179 積分", benefits: "瀏覽全部話題、收藏內容、報名免費活動" },
  { level: "Lv.2 探路小留", standard: "180-499 積分", benefits: "完成認證後可兌換貼紙、咖啡券和實用清單" },
  { level: "Lv.3 實測小留", standard: "500-999 積分", benefits: "熱門活動優先候補、二手內容優先展示" },
  { level: "Lv.4 小留夥伴", standard: "1000-1799 積分", benefits: "活動優先報名、CV 診斷與二手置頂福利" },
  { level: "Lv.5 社群嚮導", standard: "1800+ 積分", benefits: "可申請帶隊活動、參與內測與社群共創" },
];

const tips = [
  "先問清楚你的學校、預算和時間，我再幫你把答案分成馬上做、可以等、不要踩三類。",
  "租房問題要寫清楚預算、通勤地點和可接受室友數，大家會更容易給你真實建議。",
  "畢業二手交易記得標明交收地點、物品狀態和原價，信任感會高很多。",
  "不要只收藏資訊，找一個同學一起去實測，留學體驗會完全不一樣。",
];

const plannerSchools = {
  hku: { name: "香港大學 HKU", system: "HKU SIS", prefix: "CAES", credits: 6 },
  cuhk: { name: "香港中文大學 CUHK", system: "CUHK CUSIS", prefix: "UGFN", credits: 3 },
  hkust: { name: "香港科技大學 HKUST", system: "HKUST SIS", prefix: "CORE", credits: 3 },
  cityu: { name: "香港城市大學 CityU", system: "CityU AIMS", prefix: "GE", credits: 3 },
  polyu: { name: "香港理工大學 PolyU", system: "PolyU eStudent", prefix: "APSS", credits: 3 },
  hkbu: { name: "香港浸會大學 HKBU", system: "HKBU BUniPort", prefix: "GCLA", credits: 3 },
  lu: { name: "嶺南大學 LU", system: "Lingnan DegreeWorks", prefix: "CCC", credits: 3 },
};

const plannerTracks = {
  data: {
    label: "計算機、AI 與數據",
    courses: [
      { title: "數據思維與程式設計", type: "基礎能力", day: "星期一", time: "10:30–12:20", hours: 6, load: "中", goals: ["safe", "career"] },
      { title: "應用機器學習工作室", type: "作品集", day: "星期二", time: "14:30–17:20", hours: 9, load: "高", goals: ["career", "explore"] },
      { title: "AI 倫理與數據治理", type: "跨學科", day: "星期三", time: "11:30–13:20", hours: 5, load: "中", goals: ["safe", "explore"] },
      { title: "人本 AI 產品實驗室", type: "小組專題", day: "星期四", time: "15:30–18:20", hours: 8, load: "高", goals: ["career", "explore"] },
      { title: "數據庫與資訊管理", type: "專業選修", day: "星期五", time: "10:30–12:20", hours: 7, load: "中", goals: ["safe", "career"] },
      { title: "統計推理與決策", type: "核心方法", day: "星期一", time: "08:30–10:20", hours: 7, load: "高", goals: ["safe"] },
    ],
  },
  business: {
    label: "商科、金融與創業",
    courses: [
      { title: "商業分析與決策", type: "核心能力", day: "星期一", time: "13:30–15:20", hours: 6, load: "中", goals: ["safe", "career"] },
      { title: "金融科技產品實務", type: "作品集", day: "星期二", time: "15:30–18:20", hours: 8, load: "高", goals: ["career", "explore"] },
      { title: "香港商業環境", type: "本地脈絡", day: "星期三", time: "10:30–12:20", hours: 5, load: "低", goals: ["safe", "explore"] },
      { title: "創業驗證工作室", type: "小組專題", day: "星期四", time: "14:30–17:20", hours: 8, load: "高", goals: ["career", "explore"] },
      { title: "會計與財務基礎", type: "必修示例", day: "星期五", time: "09:30–11:20", hours: 7, load: "中", goals: ["safe"] },
      { title: "消費者洞察與研究", type: "專業選修", day: "星期二", time: "08:30–10:20", hours: 6, load: "中", goals: ["career", "explore"] },
    ],
  },
  policy: {
    label: "社會科學與公共政策",
    courses: [
      { title: "公共政策分析", type: "核心能力", day: "星期一", time: "11:30–13:20", hours: 6, load: "中", goals: ["safe", "career"] },
      { title: "智慧城市與數字治理", type: "前沿選修", day: "星期二", time: "14:30–17:20", hours: 7, load: "中", goals: ["career", "explore"] },
      { title: "社會研究方法", type: "必修示例", day: "星期三", time: "10:30–12:20", hours: 8, load: "高", goals: ["safe", "career"] },
      { title: "香港社會與城市生活", type: "本地脈絡", day: "星期四", time: "15:30–17:20", hours: 5, load: "低", goals: ["safe", "explore"] },
      { title: "非牟利組織創新", type: "小組專題", day: "星期五", time: "13:30–16:20", hours: 7, load: "中", goals: ["career", "explore"] },
      { title: "經濟學與公共選擇", type: "基礎理論", day: "星期二", time: "08:30–10:20", hours: 7, load: "高", goals: ["safe"] },
    ],
  },
  creative: {
    label: "傳理、設計與創意",
    courses: [
      { title: "數字敘事與內容策略", type: "作品集", day: "星期一", time: "14:30–17:20", hours: 7, load: "中", goals: ["career", "explore"] },
      { title: "AI 輔助創意實務", type: "前沿選修", day: "星期二", time: "11:30–13:20", hours: 6, load: "中", goals: ["career", "explore"] },
      { title: "媒體研究方法", type: "必修示例", day: "星期三", time: "09:30–11:20", hours: 8, load: "高", goals: ["safe", "career"] },
      { title: "香港文化與視覺傳播", type: "本地脈絡", day: "星期四", time: "13:30–15:20", hours: 5, load: "低", goals: ["safe", "explore"] },
      { title: "互動體驗設計工作室", type: "小組專題", day: "星期五", time: "14:30–17:20", hours: 8, load: "高", goals: ["career", "explore"] },
      { title: "傳播理論導論", type: "基礎理論", day: "星期一", time: "08:30–10:20", hours: 6, load: "中", goals: ["safe"] },
    ],
  },
};

let plannerVariation = 0;

function plannerState() {
  return {
    schoolKey: document.querySelector("#plannerSchool").value,
    year: document.querySelector("#plannerYear").value,
    trackKey: document.querySelector("#plannerTrack").value,
    goal: document.querySelector('input[name="plannerGoal"]:checked')?.value || "career",
    avoidMorning: document.querySelector("#avoidMorning").checked,
    freeFriday: document.querySelector("#freeFriday").checked,
    balancedLoad: document.querySelector("#balancedLoad").checked,
  };
}

function courseCode(school, year, index) {
  const level = year === "pg" ? 5 : Math.min(4, Number(year) + 1);
  return `${school.prefix}${level}${index + 1}0`;
}

function renderPlannerPlan() {
  const state = plannerState();
  const school = plannerSchools[state.schoolKey];
  const track = plannerTracks[state.trackKey];
  const goalLabels = { safe: "穩妥畢業", career: "求職導向", explore: "興趣探索" };
  const scoredCourses = track.courses
    .map((course, index) => {
      let score = course.goals.includes(state.goal) ? 12 : 2;
      if (state.avoidMorning) score += course.time.startsWith("08") || course.time.startsWith("09") ? -9 : 3;
      if (state.freeFriday) score += course.day === "星期五" ? -11 : 2;
      if (state.balancedLoad) score += course.load === "高" ? -2 : 3;
      score += ((index + plannerVariation) % 4) * 0.35;
      return { ...course, sourceIndex: index, score };
    })
    .sort((a, b) => b.score - a.score);

  const selected = scoredCourses.slice(0, 4);
  const morningCount = selected.filter((course) => course.time.startsWith("08") || course.time.startsWith("09")).length;
  const fridayCount = selected.filter((course) => course.day === "星期五").length;
  const highLoadCount = selected.filter((course) => course.load === "高").length;
  const weeklyHours = selected.reduce((sum, course) => sum + course.hours, 0);
  const preferencePenalty = morningCount * 4 + fridayCount * 4 + Math.max(0, highLoadCount - 1) * 3;
  const match = Math.max(76, 94 - preferencePenalty + (plannerVariation % 2));
  const coverageBase = state.goal === "safe" ? 84 : state.goal === "career" ? 76 : 68;
  const coverage = Math.min(92, coverageBase + (state.year === "4" ? 5 : state.year === "1" ? -3 : 0));
  const mediumRisk = preferencePenalty >= 7 || highLoadCount >= 3;
  const totalCredits = selected.length * school.credits;

  document.querySelector("#plannerSystemLabel").textContent = `模擬 ${school.system} · 示例資料`;
  document.querySelector("#plannerResultTitle").textContent = `${goalLabels[state.goal]} · ${track.label}`;
  document.querySelector("#plannerResultSummary").textContent = `AI 從 ${school.name} 的示例課程中，按你的年級、目標與時間偏好組合出這套方案。`;
  document.querySelector("#matchScore").textContent = `${match}%`;
  document.querySelector("#heroMatchScore").textContent = match;
  document.querySelector("#coverageScore").textContent = `${coverage}%`;
  document.querySelector("#weeklyLoad").textContent = `${weeklyHours}h`;
  document.querySelector("#creditSummary").textContent = `${selected.length} 門 · ${totalCredits} 學分`;
  const riskElement = document.querySelector("#riskLevel");
  riskElement.textContent = mediumRisk ? "中" : "低";
  riskElement.className = mediumRisk ? "risk-medium" : "risk-low";
  document.querySelector("#riskHint").textContent = mediumRisk ? "有偏好衝突" : "無硬性衝堂";

  document.querySelector("#coursePlanList").innerHTML = selected
    .map(
      (course) => `
        <article class="course-row">
          <span class="course-code">${escapeHTML(courseCode(school, state.year, course.sourceIndex))}</span>
          <div class="course-copy"><strong>${escapeHTML(course.title)}</strong><small>${escapeHTML(course.type)} · AI 推薦</small></div>
          <span class="course-time">${escapeHTML(course.day)} ${escapeHTML(course.time)}</span>
          <span class="course-load ${course.load === "高" ? "high" : ""}">${escapeHTML(course.load)}負擔</span>
        </article>
      `
    )
    .join("");

  const reasons = [
    state.goal === "career"
      ? `優先保留能產出作品或職場案例的課程，讓「${track.label}」方向更容易放進履歷。`
      : state.goal === "safe"
        ? "優先安排基礎與必修示例課，降低延後先修鏈的風險。"
        : "在核心課之外保留跨學科課程，讓你能測試新興趣。",
    state.avoidMorning && morningCount === 0 ? "方案避開了上午 9 點前的課，符合你的作息偏好。" : "有一門較早時段課被保留，因為它對目前目標的權重較高。",
    state.freeFriday && fridayCount === 0 ? "星期五已空出，可用於實習、活動或集中完成作業。" : "課程分散在不同上課日，避免同一天堆疊過多高負擔任務。",
    state.balancedLoad ? `高負擔課程控制在 ${highLoadCount} 門，其餘用中低負擔課平衡。` : "本方案更重視目標匹配，未主動壓低小組作業與閱讀量。",
  ];
  document.querySelector("#plannerReasons").innerHTML = reasons.map((reason) => `<li>${escapeHTML(reason)}</li>`).join("");

  const warnings = [
    "課程名稱、時段與名額目前為 MVP 示例，提交前必須回校方系統核對。",
    "AI 不會代替你登入教務系統，也不會自動提交或退選課程。",
  ];
  if (morningCount && state.avoidMorning) warnings.unshift(`${morningCount} 門課未能滿足「避免早課」偏好，請比較其他班次。`);
  if (fridayCount && state.freeFriday) warnings.unshift(`${fridayCount} 門課仍在星期五，因為目前示例選項不足。`);
  if (highLoadCount >= 2) warnings.unshift("同時修讀多門高負擔課可能形成期中作業高峰，建議再查看評核日期。 ");
  document.querySelector("#plannerWarnings").innerHTML = warnings.map((warning) => `<li>${escapeHTML(warning)}</li>`).join("");
}

const POINT_SYSTEM_VERSION = "liumer-points-v3";
const SETTINGS_VERSION = "liumer-settings-v1";
const defaultSettings = {
  preferredSchool: "all",
  interfaceLanguage: "zh-Hant",
  feedDensity: "comfortable",
  replyNotifications: true,
  eventNotifications: true,
  storeNotifications: false,
  showSchoolProfile: true,
  discoverableBySchool: true,
};
const storedQuestions = JSON.parse(localStorage.getItem("liumer_questions") || "null");
const hasStoredQuestions = Array.isArray(storedQuestions) && storedQuestions.length > 0;
const storedQuestionTitles = new Set(hasStoredQuestions ? storedQuestions.map((item) => item.title) : []);
const missingSeedQuestions = hasStoredQuestions ? seedQuestions.filter((item) => !storedQuestionTitles.has(item.title)) : seedQuestions;
const shouldMergeSeeds = hasStoredQuestions && missingSeedQuestions.length > 0;
let questions = normalizeQuestions(hasStoredQuestions ? [...missingSeedQuestions, ...storedQuestions] : seedQuestions);
const useNewPointSystem = localStorage.getItem("liumer_points_system") === POINT_SYSTEM_VERSION;
let points = useNewPointSystem ? Number(localStorage.getItem("liumer_points") || 0) : 0;
let campusVerified = useNewPointSystem && localStorage.getItem("liumer_campus_verified") === "true";
let profileRewarded = useNewPointSystem && localStorage.getItem("liumer_profile_rewarded") === "true";
let dailyRewardLog = useNewPointSystem ? JSON.parse(localStorage.getItem("liumer_daily_rewards") || "{}") : {};
let redeemedStoreItems = useNewPointSystem ? JSON.parse(localStorage.getItem("liumer_store_redemptions") || "[]") : [];
let claimedPartnerOffers = useNewPointSystem ? JSON.parse(localStorage.getItem("liumer_partner_offers") || "[]") : [];
let userSettings = loadSettings();
let activeFilter = "all";
let activeQuestionIndex = 0;
let lastDetailIndex = 0;
let activePartnerIndex = 0;

const feed = document.querySelector("#questionFeed");
const pointsBalance = document.querySelector("#pointsBalance");
const currentLevel = document.querySelector("#currentLevel");
const toast = document.querySelector("#toast");
const askDialog = document.querySelector("#askDialog");
const partnerDialog = document.querySelector("#partnerDialog");
const storePoints = document.querySelector("#storePoints");
const storeProgress = document.querySelector("#storeProgress");
const storeRegister = document.querySelector("#storeRegister");
const globalSearch = document.querySelector("#globalSearch");
const clearSearch = document.querySelector("#clearSearch");

const languageNames = {
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
  en: "English",
};

const interfaceCopy = {
  "zh-Hant": {
    htmlLang: "zh-Hant",
    searchPlaceholder: "搜尋帖子、活動、福利",
    searchAria: "搜尋全站內容",
    clearSearchAria: "清除搜尋",
    nav: {
      home: "社區問答",
      aiPlanner: "選課沙盤",
      events: "在地活動",
      store: "L-Store",
      profile: "我的背景",
      about: "關於留了麼",
      partner: "合作夥伴",
      contact: "聯絡我們",
      settings: "設定",
    },
    pointsLabel: "小留積分",
    pointsBody: "認證、完整提問、經驗回答與活動簽到都能累積；每日有上限。",
    topEyebrow: "校園郵箱認證社群 · 留學生專屬",
    topTitle: "今天想在香港收穫什麼新體驗？",
    registerCta: "註冊 / 校園認證",
    plannerCta: "AI 選課",
    askCta: "發問",
    heroTitle: "我是小留",
    shuffleTip: "換一句",
    topicHeading: "精準話題",
    searchEyebrow: "全站搜尋",
    searchEmptyTitle: "輸入關鍵字開始搜尋",
    searchSummary: "可搜尋社區帖子、評論、在地活動與 L-Store 福利。",
    closeSearch: "返回社區",
    backToFeed: "返回社區",
    backToDetail: "返回話題",
    settingsEyebrow: "帳戶與內容",
    settingsTitle: "設定",
    settingsBody: "管理通知、隱私和內容顯示；不改變小留形象或平台主題。",
    settingsDefault: "已使用預設設定",
    contentTitle: "內容偏好",
    contentHint: "讓首頁更貼近你的校園生活",
    preferredSchool: "優先高校",
    language: "界面語言",
    feedDensity: "帖子顯示密度",
    comfortable: "舒適",
    compact: "緊湊",
    notificationsTitle: "通知",
    notificationsHint: "只保留對留學生活有用的提醒",
    replyTitle: "帖子有新回覆",
    replyHint: "有人補充經驗時提醒我",
    eventTitle: "活動與名額",
    eventHint: "已收藏活動開放報名時提醒我",
    storeTitle: "L-Store 上新",
    storeHint: "有新的學生福利時提醒我",
    privacyTitle: "隱私與身份",
    privacyHint: "控制其他同學看到的背景資料",
    showSchoolTitle: "公開高校與會員等級",
    showSchoolHint: "幫助其他人判斷回答背景",
    discoverTitle: "允許同校同學找到我",
    discoverHint: "只使用高校圈與學校身份標籤",
    manageVerification: "管理校園郵箱認證",
    settingsNote: "合作內容仍會清楚標示為「合作內容 / 廣告」，並依你正在看的生活話題提供。",
    saveSettings: "保存設定",
    allSchools: "全部高校",
    allHongKongSchools: "全部香港高校",
    densityComfortable: "舒適顯示",
    densityCompact: "緊湊顯示",
    savedToast: "設定已保存，首頁內容和顯示方式已更新。",
  },
  "zh-Hans": {
    htmlLang: "zh-Hans",
    searchPlaceholder: "搜索帖子、活动、福利",
    searchAria: "搜索全站内容",
    clearSearchAria: "清除搜索",
    nav: {
      home: "社区问答",
      aiPlanner: "选课沙盘",
      events: "在地活动",
      store: "L-Store",
      profile: "我的背景",
      about: "关于留了么",
      partner: "合作伙伴",
      contact: "联系我们",
      settings: "设置",
    },
    pointsLabel: "小留积分",
    pointsBody: "认证、完整提问、经验回答与活动签到都能累积；每日有上限。",
    topEyebrow: "校园邮箱认证社群 · 留学生专属",
    topTitle: "今天想在香港收获什么新体验？",
    registerCta: "注册 / 校园认证",
    plannerCta: "AI 选课",
    askCta: "发问",
    heroTitle: "我是小留",
    shuffleTip: "换一句",
    topicHeading: "精准话题",
    searchEyebrow: "全站搜索",
    searchEmptyTitle: "输入关键词开始搜索",
    searchSummary: "可搜索社区帖子、评论、在地活动与 L-Store 福利。",
    closeSearch: "返回社区",
    backToFeed: "返回社区",
    backToDetail: "返回话题",
    settingsEyebrow: "账户与内容",
    settingsTitle: "设置",
    settingsBody: "管理通知、隐私和内容显示；不改变小留形象或平台主题。",
    settingsDefault: "已使用默认设置",
    contentTitle: "内容偏好",
    contentHint: "让首页更贴近你的校园生活",
    preferredSchool: "优先高校",
    language: "界面语言",
    feedDensity: "帖子显示密度",
    comfortable: "舒适",
    compact: "紧凑",
    notificationsTitle: "通知",
    notificationsHint: "只保留对留学生活有用的提醒",
    replyTitle: "帖子有新回复",
    replyHint: "有人补充经验时提醒我",
    eventTitle: "活动与名额",
    eventHint: "已收藏活动开放报名时提醒我",
    storeTitle: "L-Store 上新",
    storeHint: "有新的学生福利时提醒我",
    privacyTitle: "隐私与身份",
    privacyHint: "控制其他同学看到的背景资料",
    showSchoolTitle: "公开高校与会员等级",
    showSchoolHint: "帮助其他人判断回答背景",
    discoverTitle: "允许同校同学找到我",
    discoverHint: "只使用高校圈与学校身份标签",
    manageVerification: "管理校园邮箱认证",
    settingsNote: "合作内容仍会清楚标示为“合作内容 / 广告”，并依你正在看的生活话题提供。",
    saveSettings: "保存设置",
    allSchools: "全部高校",
    allHongKongSchools: "全部香港高校",
    densityComfortable: "舒适显示",
    densityCompact: "紧凑显示",
    savedToast: "设置已保存，首页内容和显示方式已更新。",
  },
  en: {
    htmlLang: "en",
    searchPlaceholder: "Search posts, events, perks",
    searchAria: "Search all Liumer content",
    clearSearchAria: "Clear search",
    nav: {
      home: "Community Q&A",
      aiPlanner: "Course Planner",
      events: "Local Events",
      store: "L-Store",
      profile: "My Background",
      about: "About Liumer",
      partner: "Partners",
      contact: "Contact Us",
      settings: "Settings",
    },
    pointsLabel: "Liumer Points",
    pointsBody: "Earn points through verification, complete questions, useful replies, and event check-ins. Daily caps apply.",
    topEyebrow: "Campus-email verified community · Built for international students",
    topTitle: "What new Hong Kong experience do you want to discover today?",
    registerCta: "Register / Campus Verify",
    plannerCta: "AI Course Planner",
    askCta: "Ask",
    heroTitle: "Hi, I am Liumer",
    shuffleTip: "New tip",
    topicHeading: "Focused Topics",
    searchEyebrow: "Site Search",
    searchEmptyTitle: "Enter a keyword to start searching",
    searchSummary: "Search community posts, comments, local events, and L-Store perks.",
    closeSearch: "Back to Community",
    backToFeed: "Back to Community",
    backToDetail: "Back to Topic",
    settingsEyebrow: "Account & Content",
    settingsTitle: "Settings",
    settingsBody: "Manage notifications, privacy, and content display while keeping the Liumer mascot and platform theme unchanged.",
    settingsDefault: "Using default settings",
    contentTitle: "Content Preferences",
    contentHint: "Tune the homepage around your campus life.",
    preferredSchool: "Priority school",
    language: "Interface language",
    feedDensity: "Post density",
    comfortable: "Comfortable",
    compact: "Compact",
    notificationsTitle: "Notifications",
    notificationsHint: "Keep only reminders that help student life.",
    replyTitle: "New replies on posts",
    replyHint: "Notify me when someone adds useful experience.",
    eventTitle: "Events and seats",
    eventHint: "Notify me when saved events open registration.",
    storeTitle: "L-Store updates",
    storeHint: "Notify me when new student perks arrive.",
    privacyTitle: "Privacy & Identity",
    privacyHint: "Control what background info other students can see.",
    showSchoolTitle: "Show school and member level",
    showSchoolHint: "Help others understand the context behind my replies.",
    discoverTitle: "Let same-school students find me",
    discoverHint: "Use only school circle and campus identity tags.",
    manageVerification: "Manage campus-email verification",
    settingsNote: "Sponsored content will remain clearly marked as Partner Content / Ad and match the topics you are viewing.",
    saveSettings: "Save settings",
    allSchools: "All schools",
    allHongKongSchools: "All Hong Kong schools",
    densityComfortable: "Comfortable display",
    densityCompact: "Compact display",
    savedToast: "Settings saved. Homepage content and display have been updated.",
  },
};

function loadSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_VERSION) || "null");
    return stored && typeof stored === "object" ? { ...defaultSettings, ...stored } : { ...defaultSettings };
  } catch {
    return { ...defaultSettings };
  }
}

function normalizeQuestions(items) {
  return items.map((item) => ({
    ...item,
    authorId: item.authorId || authorNameToId(item.author),
    photos: item.photos || [],
    comments: (item.comments || []).map((comment) => ({
      authorId: comment.authorId || authorNameToId(comment.author),
      body: comment.body,
      photos: comment.photos || [],
    })),
  }));
}

function authorNameToId(name = "") {
  if (name.includes("小留")) return "liumer";
  if (name.includes("Bella") || name.includes("林")) return "bella";
  if (name.includes("Jason")) return "jason";
  if (name.includes("Ken")) return "ken";
  if (name.includes("Mia")) return "mia";
  if (name.includes("LingU")) return "lingU";
  if (name.includes("小雨")) return "rain";
  return "me";
}

function profileFor(id) {
  return profiles[id] || profiles.me;
}

function currentCopy() {
  return interfaceCopy[userSettings.interfaceLanguage] || interfaceCopy["zh-Hant"];
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setLabelText(selector, text) {
  const element = document.querySelector(selector);
  const label = element?.tagName === "LABEL" ? element : element?.closest("label");
  if (label?.firstChild) label.firstChild.nodeValue = `${text}\n                `;
}

function setToggleCopy(inputSelector, title, hint) {
  const label = document.querySelector(inputSelector)?.closest(".toggle-row");
  if (!label) return;
  const strong = label.querySelector("strong");
  const small = label.querySelector("small");
  if (strong) strong.textContent = title;
  if (small) small.textContent = hint;
}

function updateSettingsStatus() {
  const copy = currentCopy();
  const schoolLabel = userSettings.preferredSchool === "all" ? copy.allSchools : userSettings.preferredSchool;
  const densityLabel = userSettings.feedDensity === "compact" ? copy.densityCompact : copy.densityComfortable;
  document.querySelector("#settingsStatus").textContent = `${schoolLabel} · ${densityLabel} · ${languageNames[userSettings.interfaceLanguage] || languageNames["zh-Hant"]}`;
}

function applyLanguageToUI() {
  const copy = currentCopy();
  document.documentElement.lang = copy.htmlLang;
  globalSearch.placeholder = copy.searchPlaceholder;
  globalSearch.setAttribute("aria-label", copy.searchAria);
  clearSearch.setAttribute("aria-label", copy.clearSearchAria);
  document.querySelectorAll(".nav-item").forEach((item) => {
    const label = copy.nav[item.dataset.view];
    if (!label) return;
    item.innerHTML = item.dataset.view === "aiPlanner" ? `<span class="ai-nav-mark">AI</span> ${escapeHTML(label)}` : escapeHTML(label);
  });
  setText(".points-panel > span", copy.pointsLabel);
  setText(".points-panel p", copy.pointsBody);
  setText(".topbar .eyebrow", copy.topEyebrow);
  setText(".topbar h1", copy.topTitle);
  setText("#openRegister", copy.registerCta);
  setText("#openPlanner", copy.plannerCta);
  setText("#openAsk", copy.askCta);
  setText(".hero-strip h2", copy.heroTitle);
  setText("#shuffleTip", copy.shuffleTip);
  setText("#homeView .section-head h2", copy.topicHeading);
  setText("#searchView .eyebrow", copy.searchEyebrow);
  setText("#searchTitle", copy.searchEmptyTitle);
  setText("#searchSummary", copy.searchSummary);
  setText("#closeSearch", copy.closeSearch);
  setText("#backToFeed", copy.backToFeed);
  setText("#backToDetail", copy.backToDetail);
  setText("#settingsView .eyebrow", copy.settingsEyebrow);
  setText("#settingsView .settings-heading h2", copy.settingsTitle);
  setText("#settingsView .settings-heading p:last-child", copy.settingsBody);
  setText("#settingsView .settings-panel:nth-child(1) .panel-title h3", copy.contentTitle);
  setText("#settingsView .settings-panel:nth-child(1) .panel-title span", copy.contentHint);
  setLabelText("#preferredSchool", copy.preferredSchool);
  setText('#preferredSchool option[value="all"]', copy.allHongKongSchools);
  setLabelText("#interfaceLanguage", copy.language);
  setText(".density-setting legend", copy.feedDensity);
  document.querySelectorAll('input[name="feedDensity"]').forEach((input) => {
    const label = input.closest("label")?.querySelector("span");
    if (label) label.textContent = input.value === "compact" ? copy.compact : copy.comfortable;
  });
  setText("#settingsView .settings-panel:nth-child(2) .panel-title h3", copy.notificationsTitle);
  setText("#settingsView .settings-panel:nth-child(2) .panel-title span", copy.notificationsHint);
  setToggleCopy("#replyNotifications", copy.replyTitle, copy.replyHint);
  setToggleCopy("#eventNotifications", copy.eventTitle, copy.eventHint);
  setToggleCopy("#storeNotifications", copy.storeTitle, copy.storeHint);
  setText("#settingsView .settings-panel:nth-child(3) .panel-title h3", copy.privacyTitle);
  setText("#settingsView .settings-panel:nth-child(3) .panel-title span", copy.privacyHint);
  setToggleCopy("#showSchoolProfile", copy.showSchoolTitle, copy.showSchoolHint);
  setToggleCopy("#discoverableBySchool", copy.discoverTitle, copy.discoverHint);
  setText("#settingsRegister", copy.manageVerification);
  setText(".settings-actions p", copy.settingsNote);
  setText("#saveSettings", copy.saveSettings);
  updateSettingsStatus();
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderAvatar(profile, size = "") {
  return `<span class="avatar ${size}" style="background:${profile.color}">${escapeHTML(profile.avatar)}</span>`;
}

function renderAuthorButton(authorId) {
  const profile = profileFor(authorId);
  const level = authorId === "me" ? getMemberLevel().level : profile.level;
  return `
    <button class="author-btn" data-user="${authorId}" type="button">
      ${renderAvatar(profile)}
      <span>
        <strong>${escapeHTML(profile.name)}</strong>
        <small>${escapeHTML(level)}</small>
      </span>
    </button>
  `;
}

function renderPhotos(photos = [], mode = "thumb") {
  if (!photos.length) return "";
  return `
    <div class="photo-grid ${mode}">
      ${photos.map((photo) => `<img src="${photo}" alt="話題照片" />`).join("")}
    </div>
  `;
}

function saveState() {
  localStorage.setItem("liumer_questions", JSON.stringify(questions));
  localStorage.setItem("liumer_points", String(points));
  localStorage.setItem("liumer_points_system", POINT_SYSTEM_VERSION);
  localStorage.setItem("liumer_campus_verified", String(campusVerified));
  localStorage.setItem("liumer_profile_rewarded", String(profileRewarded));
  localStorage.setItem("liumer_daily_rewards", JSON.stringify(dailyRewardLog));
  localStorage.setItem("liumer_store_redemptions", JSON.stringify(redeemedStoreItems));
  localStorage.setItem("liumer_partner_offers", JSON.stringify(claimedPartnerOffers));
}

function getMemberLevel() {
  if (points >= 1800) return memberLevels[4];
  if (points >= 1000) return memberLevels[3];
  if (points >= 500) return memberLevels[2];
  if (points >= 180) return memberLevels[1];
  return memberLevels[0];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function updatePoints(delta) {
  points = Math.max(0, points + delta);
  refreshPointsUI();
  saveState();
}

function getTodayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function grantDailyReward(action, amount, dailyLimit) {
  const today = getTodayKey();
  const usage = dailyRewardLog[today] || {};
  const used = usage[action] || 0;
  if (used >= dailyLimit) return { awarded: 0, reachedLimit: true };

  dailyRewardLog = { ...dailyRewardLog, [today]: { ...usage, [action]: used + 1 } };
  updatePoints(amount);
  return { awarded: amount, reachedLimit: false };
}

function refreshPointsUI() {
  const level = getMemberLevel();
  pointsBalance.textContent = points;
  currentLevel.textContent = level.level;
  document.querySelector("#miniLevelStatus").textContent = `目前 ${level.level}`;
  document.querySelector("#profileLevelBadge").textContent = level.level;
  storePoints.textContent = points;

  const campusText = campusVerified ? "校園郵箱已認證" : "校園身份待認證";
  document.querySelector("#campusStatus").textContent = campusText;
  document.querySelector("#profileCampusBadge").textContent = campusText;
  storeRegister.textContent = campusVerified ? "校園身份已認證" : "完成校園認證 +120";

  if (!campusVerified) {
    storeProgress.textContent = "完成校園認證後，即可兌換學生專屬福利。";
    return;
  }

  const nextItem = storeItems.find((item, index) => !redeemedStoreItems.includes(index) && item.cost > points);
  storeProgress.textContent = nextItem
    ? `再累積 ${nextItem.cost - points} 積分，可兌換「${nextItem.title}」。`
    : "你已可兌換目前所有尚未領取的學生福利。";
}

function completeCampusVerification(email) {
  if (campusVerified) {
    showToast("校園身份已認證，積分不會重複發放。");
    return false;
  }
  campusVerified = true;
  document.querySelector("#schoolEmail").value = email;
  updatePoints(120);
  renderCards("#storeList", storeItems, "兌換", "redeem-btn");
  showToast("校園身份已認證。高校圈與學生專屬福利已解鎖。+120 積分");
  return true;
}

function readImage(input) {
  const file = input.files?.[0];
  if (!file) return Promise.resolve(null);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
    return;
  }
  dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
    return;
  }
  dialog.removeAttribute("open");
}

function renderSponsoredCard(partnerIndex) {
  const partner = partnerPlacements[partnerIndex % partnerPlacements.length];
  return `
    <article class="sponsored-card" aria-label="合作內容 / 廣告">
      <div class="sponsored-topline">
        <span>合作內容 / 廣告</span>
        <small>${escapeHTML(partner.category)}</small>
      </div>
      <div class="sponsored-content">
        <div>
          <p class="sponsored-name">${escapeHTML(partner.name)}</p>
          <h3>${escapeHTML(partner.title)}</h3>
          <p>${escapeHTML(partner.body)}</p>
          <p class="sponsored-offer">${escapeHTML(partner.offer)}</p>
        </div>
        <button class="partner-cta" data-partner="${partnerIndex % partnerPlacements.length}" type="button">查看學生禮遇</button>
      </div>
      <p class="sponsored-disclosure">${escapeHTML(partner.sponsor)}。</p>
    </article>
  `;
}

function renderQuestions() {
  const schoolTopics = ["港大 HKU", "中大 CUHK", "科大 HKUST", "城大 CityU", "理大 PolyU", "浸大 HKBU", "嶺南 LU"];
  let visible =
    activeFilter === "all"
      ? questions
      : activeFilter === "高校圈"
        ? questions.filter((q) => schoolTopics.includes(q.topic))
        : questions.filter((q) => q.topic === activeFilter);

  if (activeFilter === "all" && userSettings.preferredSchool !== "all") {
    visible = [
      ...visible.filter((question) => question.topic === userSettings.preferredSchool),
      ...visible.filter((question) => question.topic !== userSettings.preferredSchool),
    ];
  }

  feed.innerHTML = visible
    .flatMap((question, index) => {
      const items = [
        `
        <article class="question-card">
          <div class="question-top">
            <span class="topic">${escapeHTML(question.topic)}</span>
            <span class="cost">經驗回答 +25</span>
          </div>
          <button class="question-link" data-index="${questions.indexOf(question)}" type="button">
            <h3>${escapeHTML(question.title)}</h3>
          </button>
          <p>${escapeHTML(question.body)}</p>
          ${renderPhotos(question.photos)}
          <div class="question-footer">
            ${renderAuthorButton(question.authorId)}
            <div class="question-meta">
              <span>${question.answers} 個回答</span>
              <span>${question.comments.length} 條評論</span>
              <span>Liumer 已暖場</span>
            </div>
          </div>
        </article>
      `,
      ];
      if ((index + 1) % 5 === 0) items.push(renderSponsoredCard(Math.floor(index / 5)));
      return items;
    })
    .join("");

  if (!visible.length) {
    feed.innerHTML = `<article class="question-card"><h3>這個分類暫時還沒有問題</h3><p>你可以成為第一個發問的人。</p></article>`;
  }
}

function searchHaystack(values) {
  return values.filter(Boolean).join(" ").toLocaleLowerCase("zh-Hant");
}

function renderSearchResults(rawQuery) {
  const query = rawQuery.trim();
  const normalizedQuery = query.toLocaleLowerCase("zh-Hant");
  const results = [];

  questions.forEach((question, index) => {
    const profile = profileFor(question.authorId);
    const comments = question.comments.map((comment) => comment.body);
    if (searchHaystack([question.title, question.body, question.topic, profile.name, profile.school, ...comments]).includes(normalizedQuery)) {
      results.push({
        kind: "post",
        label: `社區帖子 · ${question.topic}`,
        title: question.title,
        body: question.body,
        action: "開啟帖子",
        index,
      });
    }
  });

  events.forEach((item, index) => {
    if (searchHaystack([item.title, item.tag, item.body, item.sponsor]).includes(normalizedQuery)) {
      results.push({ kind: "activity", label: `在地活動 · ${item.tag}`, title: item.title, body: item.body, action: "查看活動", index });
    }
  });

  storeItems.forEach((item, index) => {
    if (searchHaystack([item.title, item.tag, item.body, item.sponsor]).includes(normalizedQuery)) {
      results.push({ kind: "reward", label: `L-Store · ${item.cost} 積分`, title: item.title, body: item.body, action: "查看福利", index });
    }
  });

  partnerPlacements.forEach((item, index) => {
    if (searchHaystack([item.name, item.category, item.title, item.body, item.offer]).includes(normalizedQuery)) {
      results.push({ kind: "partner", label: "合作禮遇", title: item.title, body: item.offer, action: "查看禮遇", index });
    }
  });

  document.querySelector("#searchTitle").textContent = `「${query}」的搜尋結果`;
  document.querySelector("#searchSummary").textContent = results.length
    ? `找到 ${results.length} 項相關內容，包括帖子、評論、活動和學生福利。`
    : "暫時沒有完全符合的內容，可以換一個學校、地區或生活場景試試。";

  document.querySelector("#searchResults").innerHTML = results.length
    ? results
        .slice(0, 30)
        .map(
          (result) => `
            <article class="search-result" data-kind="${result.kind}">
              <div class="search-result-copy">
                <span class="search-result-type">${escapeHTML(result.label)}</span>
                <h3>${escapeHTML(result.title)}</h3>
                <p>${escapeHTML(result.body)}</p>
              </div>
              <button class="ghost-action search-result-open" data-kind="${result.kind}" data-index="${result.index}" type="button">${result.action}</button>
            </article>
          `
        )
        .join("")
    : `
        <section class="search-empty">
          <h3>換一組關鍵字再找找</h3>
          <p>例如「租房」「港大」「咖啡」「實習」「博物館」或「二手家具」。</p>
        </section>
      `;
}

function runSearch(value) {
  const query = value.trim();
  clearSearch.hidden = !query;
  if (!query) {
    setView("home");
    return;
  }
  renderSearchResults(query);
  setView("search");
}

function renderTopicDetail(index) {
  activeQuestionIndex = index;
  lastDetailIndex = index;
  const question = questions[index];
  document.querySelector("#topicDetail").innerHTML = `
    <article class="detail-card">
      <div class="question-top">
        <span class="topic">${escapeHTML(question.topic)}</span>
        <span class="cost">經驗回答 +25</span>
      </div>
      <h2>${escapeHTML(question.title)}</h2>
      <p>${escapeHTML(question.body)}</p>
      ${renderPhotos(question.photos, "large")}
      <div class="question-footer">
        ${renderAuthorButton(question.authorId)}
        <div class="question-meta">
          <span>${question.answers} 個回答</span>
          <span>${question.comments.length} 條評論</span>
        </div>
      </div>
    </article>
    <section class="panel comment-panel">
      <div class="panel-title">
        <h3>討論區</h3>
        <span>點擊頭像看背景</span>
      </div>
      <div class="comment-list">
        ${question.comments
          .map((comment) => {
            const profile = profileFor(comment.authorId);
            return `
              <div class="comment-item">
                <div class="comment-author">
                  ${renderAuthorButton(comment.authorId)}
                  <span class="credibility">${escapeHTML(profile.role)}</span>
                </div>
                <p>${escapeHTML(comment.body)}</p>
                ${renderPhotos(comment.photos)}
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="comment-box">
        <input id="commentInput" placeholder="分享 40 字以上的經驗、提醒或資源..." />
        <label class="file-pill">
          加圖
          <input id="commentPhoto" type="file" accept="image/*" />
        </label>
        <button class="primary-action" id="submitComment" type="button">提交回答 +25</button>
      </div>
    </section>
  `;
  setView("detail");
}

function renderPublicProfile(userId) {
  const profile = profileFor(userId);
  const level = userId === "me" ? getMemberLevel().level : profile.level;
  const badges = userId === "me" ? [campusVerified ? "校園郵箱已認證" : "校園身份待認證", ...profile.badges.slice(1)] : profile.badges;
  const visibleSchool = userId === "me" && !userSettings.showSchoolProfile ? "高校資料已隱藏" : profile.school;
  const visibleBadges = userId === "me" && !userSettings.showSchoolProfile ? badges.filter((badge) => !badge.includes("校園")) : badges;
  document.querySelector("#publicProfile").innerHTML = `
    <section class="profile-hero panel">
      ${renderAvatar(profile, "big")}
      <div>
        <p class="eyebrow">${escapeHTML(profile.role)}</p>
        <h2>${escapeHTML(profile.name)}</h2>
        <p>${escapeHTML(visibleSchool)}</p>
        <div class="badge-row">
          ${visibleBadges.map((badge) => `<span>${escapeHTML(badge)}</span>`).join("")}
        </div>
      </div>
    </section>
    <section class="profile-evidence">
      <article class="panel">
        <h3>可信度參考</h3>
        <p>${escapeHTML(profile.credibility)}</p>
      </article>
      <article class="panel">
        <h3>會員等級</h3>
        <p>${escapeHTML(level)}</p>
      </article>
      <article class="panel">
        <h3>適合判斷的內容</h3>
        <p>${visibleBadges.map(escapeHTML).join("、") || "由用戶自行選擇公開"}</p>
      </article>
    </section>
  `;
  setView("userProfile");
}

function applySettingsToUI() {
  document.body.classList.toggle("compact-feed", userSettings.feedDensity === "compact");
  document.querySelector("#preferredSchool").value = userSettings.preferredSchool;
  document.querySelector("#interfaceLanguage").value = userSettings.interfaceLanguage;
  document.querySelectorAll('input[name="feedDensity"]').forEach((input) => {
    input.checked = input.value === userSettings.feedDensity;
  });
  document.querySelector("#replyNotifications").checked = userSettings.replyNotifications;
  document.querySelector("#eventNotifications").checked = userSettings.eventNotifications;
  document.querySelector("#storeNotifications").checked = userSettings.storeNotifications;
  document.querySelector("#showSchoolProfile").checked = userSettings.showSchoolProfile;
  document.querySelector("#discoverableBySchool").checked = userSettings.discoverableBySchool;
  applyLanguageToUI();
}

function saveUserSettings() {
  const selectedDensity = document.querySelector('input[name="feedDensity"]:checked')?.value || "comfortable";
  userSettings = {
    preferredSchool: document.querySelector("#preferredSchool").value,
    interfaceLanguage: document.querySelector("#interfaceLanguage").value,
    feedDensity: selectedDensity,
    replyNotifications: document.querySelector("#replyNotifications").checked,
    eventNotifications: document.querySelector("#eventNotifications").checked,
    storeNotifications: document.querySelector("#storeNotifications").checked,
    showSchoolProfile: document.querySelector("#showSchoolProfile").checked,
    discoverableBySchool: document.querySelector("#discoverableBySchool").checked,
  };
  localStorage.setItem(SETTINGS_VERSION, JSON.stringify(userSettings));
  applySettingsToUI();
  renderQuestions();
  showToast(currentCopy().savedToast);
}

function renderCards(target, items, buttonLabel, handlerName) {
  document.querySelector(target).innerHTML = items
    .map(
      (item, index) => {
        const isStoreItem = handlerName === "redeem-btn";
        const isRedeemed = isStoreItem && redeemedStoreItems.includes(index);
        const needsVerification = isStoreItem && item.requiresVerification && !campusVerified;
        const label = isRedeemed ? "已換取" : needsVerification ? "完成認證後兌換" : buttonLabel;
        return `
        <article class="store-card">
          <div class="visual-band"><span>${escapeHTML(item.tag)}</span></div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.body)}</p>
          <div class="store-meta">
            <span>
              <b class="${item.reward ? "reward" : "cost"}">${item.reward ? escapeHTML(item.reward) : typeof item.cost === "number" ? `${item.cost} 積分` : escapeHTML(item.cost)}</b>
              ${item.seats ? `<small>${escapeHTML(item.seats)}</small>` : ""}
              ${item.sponsor ? `<small class="sponsor-line">${escapeHTML(item.sponsor)}</small>` : ""}
              ${isStoreItem ? `<small>${item.requiresVerification ? "校園認證後可換 · 每件限一次" : "每件限一次"}</small>` : ""}
            </span>
            <button class="ghost-action ${handlerName}" data-index="${index}" type="button" ${isRedeemed ? "disabled" : ""}>${label}</button>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderPartnerOffer(index) {
  activePartnerIndex = Number(index) % partnerPlacements.length;
  const partner = partnerPlacements[activePartnerIndex];
  const claimed = claimedPartnerOffers.includes(activePartnerIndex);
  const claimLabel = claimed ? "已領取禮遇" : campusVerified ? "領取學生禮遇" : "完成認證後領取";

  document.querySelector("#partnerDialogContent").innerHTML = `
    <p class="partner-dialog-label">${escapeHTML(partner.category)}</p>
    <h3>${escapeHTML(partner.name)}</h3>
    <p>${escapeHTML(partner.body)}</p>
    <div class="partner-offer-box">
      <span>學生專屬禮遇</span>
      <strong>${escapeHTML(partner.offer)}</strong>
    </div>
    <p class="partner-dialog-note">${escapeHTML(partner.sponsor)}。廣告與合作禮遇均會清楚標示，避免干擾一般社群討論。</p>
    <button class="primary-action" id="claimPartnerOffer" type="button" ${claimed ? "disabled" : ""}>${claimLabel}</button>
  `;
  openDialog(partnerDialog);
}

function claimPartnerOffer() {
  if (!campusVerified) {
    closeDialog(partnerDialog);
    openDialog(document.querySelector("#registerDialog"));
    showToast("完成校園郵箱認證後，即可領取合作夥伴學生禮遇。");
    return;
  }
  if (claimedPartnerOffers.includes(activePartnerIndex)) {
    showToast("這項學生禮遇已領取。");
    return;
  }
  claimedPartnerOffers = [...claimedPartnerOffers, activePartnerIndex];
  saveState();
  renderPartnerOffer(activePartnerIndex);
  showToast("學生禮遇已加入帳戶；正式版本會提供核銷碼或到店 QR Code。");
}

function renderLevels() {
  document.querySelector("#miniLevels").innerHTML = memberLevels
    .slice(0, 5)
    .map((item) => `<div><strong>${escapeHTML(item.level)}</strong><span>${escapeHTML(item.standard)}</span></div>`)
    .join("");

  document.querySelector("#levelGrid").innerHTML = memberLevels
    .map(
      (item) => `
        <article class="level-card">
          <h3>${escapeHTML(item.level)}</h3>
          <p><strong>標準</strong>${escapeHTML(item.standard)}</p>
          <p><strong>福利</strong>${escapeHTML(item.benefits)}</p>
        </article>
      `
    )
    .join("");
}

function setView(viewName) {
  const targetView = document.querySelector(`#${viewName}View`);
  if (!targetView) return;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  targetView.classList.add("active");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
}

document.querySelector("#openAsk").addEventListener("click", () => openDialog(askDialog));
document.querySelector("#openRegister").addEventListener("click", () => openDialog(document.querySelector("#registerDialog")));
document.querySelector("#openPlanner").addEventListener("click", () => {
  setView("aiPlanner");
  renderPlannerPlan();
});
document.querySelector("#closeAsk").addEventListener("click", () => closeDialog(askDialog));
document.querySelector("#cancelAsk").addEventListener("click", () => closeDialog(askDialog));
document.querySelector(".ask-form").addEventListener("submit", (event) => event.preventDefault());

document.querySelector("#closeRegister").addEventListener("click", () => closeDialog(document.querySelector("#registerDialog")));
document.querySelector("#cancelRegister").addEventListener("click", () => closeDialog(document.querySelector("#registerDialog")));
document.querySelector(".register-form").addEventListener("submit", (event) => event.preventDefault());
document.querySelector("#closePartner").addEventListener("click", () => closeDialog(partnerDialog));
partnerDialog.addEventListener("click", (event) => {
  if (!event.target.closest("#claimPartnerOffer")) return;
  claimPartnerOffer();
});
document.querySelector("#schoolShortcuts").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelector("#registerEmail").value = `student@${button.dataset.domain}`;
});
document.querySelector("#submitRegister").addEventListener("click", () => {
  const email = document.querySelector("#registerEmail").value.trim().toLowerCase();
  if (!isCampusEmail(email)) {
    showToast("請使用學校郵箱完成認證。");
    return;
  }
  closeDialog(document.querySelector("#registerDialog"));
  completeCampusVerification(email);
});

document.querySelector("#submitQuestion").addEventListener("click", async () => {
  const title = document.querySelector("#askTitle").value.trim();
  const body = document.querySelector("#askBody").value.trim();
  const topic = document.querySelector("#askTopic").value;
  const photo = await readImage(document.querySelector("#askPhoto"));

  if (title.length < 10 || body.length < 30) {
    showToast("完整問題需要至少 10 字標題與 30 字背景，才會獲得積分。");
    return;
  }

  questions.unshift({
    title,
    topic,
    body: body || "希望有經驗的同學分享一下真實情況。",
    authorId: "me",
    answers: 1,
    points: 0,
    photos: photo ? [photo] : [],
    comments: [{ authorId: "liumer", body: "我先幫你暖場：把背景、預算、時間寫清楚，大家會更容易給出實用答案。", photos: [] }],
  });

  saveState();
  const reward = grantDailyReward("question", 15, 2);
  closeDialog(askDialog);
  document.querySelector(".ask-form").reset();
  activeFilter = "all";
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "all"));
  renderQuestions();
  setView("home");
  showToast(reward.awarded ? "已發布完整問題，Liumer 先幫你暖場了。+15 積分" : "問題已發布；今日兩條提問積分已領完。");
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    renderQuestions();
  });
});

document.querySelector("#sidebarSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(globalSearch.value);
});

globalSearch.addEventListener("input", () => runSearch(globalSearch.value));
globalSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  globalSearch.value = "";
  runSearch("");
});

clearSearch.addEventListener("click", () => {
  globalSearch.value = "";
  runSearch("");
  globalSearch.focus();
});

document.querySelector("#closeSearch").addEventListener("click", () => {
  globalSearch.value = "";
  clearSearch.hidden = true;
  setView("home");
});

document.querySelector("#searchResults").addEventListener("click", (event) => {
  const button = event.target.closest(".search-result-open");
  if (!button) return;
  const index = Number(button.dataset.index);
  if (button.dataset.kind === "post") {
    renderTopicDetail(index);
    return;
  }
  if (button.dataset.kind === "activity") {
    setView("events");
    showToast(`已打開活動：${events[index].title}`);
    return;
  }
  if (button.dataset.kind === "reward") {
    setView("store");
    showToast(`已打開福利：${storeItems[index].title}`);
    return;
  }
  renderPartnerOffer(index);
});

document.querySelector(".campus-list").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.tool === "ai-planner") {
    setView("aiPlanner");
    renderPlannerPlan();
    return;
  }
  if (button.dataset.tool === "register") {
    openDialog(document.querySelector("#registerDialog"));
    return;
  }
  if (button.dataset.tool === "schools") {
    activeFilter = "高校圈";
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "高校圈"));
    renderQuestions();
    showToast("已打開高校圈，顯示香港各大學帖子。");
    return;
  }
  if (button.dataset.tool === "arrival") {
    activeFilter = "留學生話題";
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.filter === "留學生話題"));
    renderQuestions();
    showToast("已打開到港清單相關話題。");
    return;
  }
  if (button.dataset.tool === "perks") {
    setView("partner");
    showToast("已打開學生禮遇與合作夥伴資訊。");
  }
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

document.querySelector("#saveSettings").addEventListener("click", saveUserSettings);
document.querySelector("#settingsRegister").addEventListener("click", () => openDialog(document.querySelector("#registerDialog")));

document.querySelector("#plannerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  plannerVariation += 1;
  renderPlannerPlan();
  showToast("AI 已重新檢查目標、時間偏好與示例課程規則。");
});

document.querySelector("#regeneratePlan").addEventListener("click", () => {
  plannerVariation += 1;
  renderPlannerPlan();
  showToast("已換一組排序，提交前請回學校正式系統核對。");
});

document.querySelectorAll("#plannerSchool, #plannerYear, #plannerTrack, input[name='plannerGoal'], #avoidMorning, #freeFriday, #balancedLoad").forEach((control) => {
  control.addEventListener("change", renderPlannerPlan);
});

document.body.addEventListener("click", (event) => {
  const partnerCta = event.target.closest(".partner-cta");
  if (partnerCta) {
    event.stopPropagation();
    renderPartnerOffer(partnerCta.dataset.partner);
    return;
  }
  const author = event.target.closest(".author-btn");
  if (!author) return;
  event.stopPropagation();
  renderPublicProfile(author.dataset.user);
});

feed.addEventListener("click", (event) => {
  const button = event.target.closest(".question-link");
  if (!button) return;
  renderTopicDetail(Number(button.dataset.index));
});

document.querySelector("#backToFeed").addEventListener("click", () => setView("home"));
document.querySelector("#backToDetail").addEventListener("click", () => renderTopicDetail(lastDetailIndex));

document.querySelector("#topicDetail").addEventListener("click", async (event) => {
  if (!event.target.closest("#submitComment")) return;
  const input = document.querySelector("#commentInput");
  const photo = await readImage(document.querySelector("#commentPhoto"));
  if (input.value.trim().length < 40) {
    showToast("請分享至少 40 字的真實經驗；照片可作為補充。");
    return;
  }

  questions[activeQuestionIndex].comments.push({ authorId: "me", body: input.value.trim() || "補充一張現場照片。", photos: photo ? [photo] : [] });
  questions[activeQuestionIndex].answers += 1;
  saveState();
  const reward = grantDailyReward("answer", 25, 3);
  renderTopicDetail(activeQuestionIndex);
  renderQuestions();
  showToast(reward.awarded ? "回答已送出。+25 積分" : "回答已送出；今日三條回答積分已領完。");
});

document.querySelector("#shuffleTip").addEventListener("click", () => {
  const current = document.querySelector("#liumerLine").textContent;
  const next = tips.find((tip) => tip !== current) || tips[0];
  document.querySelector("#liumerLine").textContent = next;
});

document.querySelector("#storeList").addEventListener("click", (event) => {
  const button = event.target.closest(".redeem-btn");
  if (!button) return;

  const item = storeItems[Number(button.dataset.index)];
  const itemIndex = Number(button.dataset.index);
  if (item.requiresVerification && !campusVerified) {
    showToast("完成校園郵箱認證後，即可兌換學生專屬福利。");
    openDialog(document.querySelector("#registerDialog"));
    return;
  }
  if (redeemedStoreItems.includes(itemIndex)) {
    showToast("這件福利已換取，每件禮物限一次。");
    return;
  }
  if (points < item.cost) {
    showToast(`還差 ${item.cost - points} 積分；分享幾條真實經驗就能慢慢累積。`);
    return;
  }

  updatePoints(-item.cost);
  redeemedStoreItems = [...redeemedStoreItems, itemIndex];
  saveState();
  renderCards("#storeList", storeItems, "兌換", "redeem-btn");
  refreshPointsUI();
  showToast(`已兌換：${item.title}。我們會在正式版本提供領取方式。`);
});

document.querySelector("#eventsList").addEventListener("click", (event) => {
  const button = event.target.closest(".join-btn");
  if (!button) return;
  button.textContent = "已報名";
  button.disabled = true;
  showToast("已預留名額；活動到場簽到後才會獲得 +60 積分。");
});

document.querySelector("#saveProfile").addEventListener("click", () => {
  if (profileRewarded) {
    showToast("背景資料已保存，可用於匹配提問和諮詢。");
    return;
  }
  profileRewarded = true;
  updatePoints(40);
  showToast("背景資料已保存。首次完成資料 +40 積分。");
});

document.querySelector("#verifyEmail").addEventListener("click", () => {
  const email = document.querySelector("#schoolEmail").value.trim().toLowerCase();
  if (!isCampusEmail(email)) {
    showToast("請使用學校郵箱，例如 @ln.hk、@edu.hk 或 @ac.hk。");
    return;
  }
  completeCampusVerification(email);
});

storeRegister.addEventListener("click", () => {
  if (campusVerified) {
    showToast("校園身份已認證；你已可兌換學生專屬福利。");
    return;
  }
  openDialog(document.querySelector("#registerDialog"));
});

document.querySelector("#goToPartnerContact").addEventListener("click", () => {
  setView("contact");
  showToast("請留下合作方向與聯絡方式，我們會安排回覆。");
});

function isCampusEmail(email) {
  return /@(.*\.)?(edu|edu\.hk|ac\.hk|ln\.hk|hku\.hk|cuhk\.edu\.hk|link\.cuhk\.edu\.hk|connect\.hku\.hk|polyu\.edu\.hk|connect\.polyu\.hk|cityu\.edu\.hk|my\.cityu\.edu\.hk|hkbu\.edu\.hk|life\.hkbu\.edu\.hk|ust\.hk|connect\.ust\.hk)$/.test(email);
}

document.querySelector("#submitContact").addEventListener("click", () => {
  const name = document.querySelector("#contactName").value.trim();
  const info = document.querySelector("#contactInfo").value.trim();
  const message = document.querySelector("#contactMessage").value.trim();
  if (!name || !info || !message) {
    showToast("請填寫名字、聯絡方式和訊息內容。");
    return;
  }
  document.querySelector(".contact-form").reset?.();
  document.querySelector("#contactName").value = "";
  document.querySelector("#contactInfo").value = "";
  document.querySelector("#contactMessage").value = "";
  showToast("訊息已記錄，正式版本會接入電郵或 CRM。");
});

if (!useNewPointSystem || shouldMergeSeeds) saveState();
applySettingsToUI();
refreshPointsUI();
renderQuestions();
renderCards("#eventsList", events, "報名", "join-btn");
renderCards("#storeList", storeItems, "兌換", "redeem-btn");
renderLevels();
renderPlannerPlan();
