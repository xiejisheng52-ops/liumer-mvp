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
  {
    title: "修過《智慧城市與數字治理》嗎？想了解評核、案例和搶課情況",
    topic: "留學生話題",
    courseTitle: "智慧城市與數字治理",
    body: "AI 選課沙盤把這門課列為前沿選修。想問修過的同學：課堂會不會偏技術、香港案例多不多，以及名額通常是否緊張？",
    authorId: "me",
    answers: 12,
    points: 135,
    photos: [],
    comments: [
      { authorId: "lingU", body: "內容不要求寫很深的程式，但要能把數據、平台治理和公共政策放在同一個案例裡分析。小組報告最好早點確定城市議題。", photos: [] },
      { authorId: "cityuPeer", body: "熱門老師的班次會比較快滿，建議先收藏替代時段。選課前可以先看往年評核比例，案例課很看平時參與。", photos: [] },
      { authorId: "liumer", body: "同校評價屬於經驗訊號，正式名額、先修和課程內容仍要以當學期校方系統為準。", photos: [] },
    ],
  },
  {
    title: "《公共政策分析》閱讀量和課堂討論強度如何？",
    topic: "留學生話題",
    courseTitle: "公共政策分析",
    body: "希望用這門課打好政策框架，但也擔心每週閱讀量和英文討論壓力。修過的同學可以分享準備方法嗎？",
    authorId: "lingU",
    answers: 9,
    points: 110,
    photos: [],
    comments: [
      { authorId: "lingU", body: "每週先抓政策問題、利益相關者和評估標準三件事，讀文獻會快很多。討論課重點是說清楚證據，不是背理論名稱。", photos: [] },
      { authorId: "rain", body: "如果英文閱讀慢，可以和同學輪流做一頁摘要，但最後仍要自己看結論和研究限制。", photos: [] },
    ],
  },
  {
    title: "《社會研究方法》真的很重嗎？定量和小組專題怎樣分配時間",
    topic: "留學生話題",
    courseTitle: "社會研究方法",
    body: "沙盤預測這門課負擔較高。想知道問卷、訪談、統計和研究報告會不會集中在期中後一起交。",
    authorId: "me",
    answers: 15,
    points: 155,
    photos: [],
    comments: [
      { authorId: "cuhkPeer", body: "真正花時間的是把研究問題變成可測量的變量。小組如果第一週就分好文獻、方法和數據清理，後面不會那麼趕。", photos: [] },
      { authorId: "hkuPeer", body: "建議提前確認軟件要求和數據格式。方法課的搶課不一定最難，但熱門時段常會先滿。", photos: [] },
    ],
  },
  {
    title: "《香港社會與城市生活》適合剛到港的同學嗎？",
    topic: "融入香港",
    courseTitle: "香港社會與城市生活",
    body: "想選一門能幫我理解社區、住房和城市文化的課，也希望不要只有課本，最好會有實地觀察。",
    authorId: "rain",
    answers: 11,
    points: 120,
    photos: [],
    comments: [
      { authorId: "rain", body: "這類課最有價值的是把日常看到的屋邨、街市和交通放回歷史脈絡。若有田野作業，記得預留週末時間。", photos: [] },
      { authorId: "hkbuPeer", body: "對剛到港的同學很友好，評核通常比較分散，但熱門老師和下午時段可能較難搶。", photos: [] },
    ],
  },
  {
    title: "《非牟利組織創新》小組合作多嗎？適合做社會創新作品集嗎",
    topic: "升學就業",
    courseTitle: "非牟利組織創新",
    body: "希望把課程專題做成求職作品集，但不確定合作機構、提案和小組分工佔比。",
    authorId: "lingU",
    answers: 10,
    points: 125,
    photos: [],
    comments: [
      { authorId: "lingU", body: "很適合累積訪談、需求分析和方案驗證案例，但要在組內先定義誰負責對外聯絡。這類課的工作量取決於合作機構回覆速度。", photos: [] },
      { authorId: "codemate", body: "可以把成果做成一頁問題、原型、測試結果和下一步，面試時比只放一份簡報更好說。", photos: [] },
    ],
  },
  {
    title: "《經濟學與公共選擇》早課值得修嗎？想聽考試和先修經驗",
    topic: "留學生話題",
    courseTitle: "經濟學與公共選擇",
    body: "這門課對政策方向很重要，但示例時段較早。想知道數學要求、考試比重和是否有較晚班次。",
    authorId: "me",
    answers: 8,
    points: 100,
    photos: [],
    comments: [
      { authorId: "lingU", body: "數學不是唯一難點，關鍵是理解個人誘因如何影響公共決策。若選早課，最好把同一天其他課排得鬆一點。", photos: [] },
      { authorId: "liumer", body: "沙盤會把早課偏好和課程重要性一起評分；正式版也會列出同課號的替代班次。", photos: [] },
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

const aiAnswerSources = {
  admissions: [
    { title: "CUHK Undergraduate Admissions", meta: "香港中文大學 · 本科招生", url: "https://admission.cuhk.edu.hk/" },
    { title: "CUHK Graduate School", meta: "香港中文大學 · 研究院", url: "https://www.gs.cuhk.edu.hk/" },
    { title: "Student visa / entry permit", meta: "香港入境事務處", url: "https://www.immd.gov.hk/eng/services/visas/study.html" },
  ],
  housing: [
    { title: "Tenancy Matters", meta: "香港差餉物業估價署", url: "https://www.rvd.gov.hk/en/our_services/tenancy_matters.html" },
    { title: "Estate Agents Authority", meta: "香港地產代理監管局", url: "https://www.eaa.org.hk/" },
    { title: "Consumer Council", meta: "香港消費者委員會", url: "https://www.consumer.org.hk/" },
  ],
  courses: [
    { title: "HKU Student Information System", meta: "香港大學 · SIS", url: "https://sis-main.hku.hk/" },
    { title: "CUHK CUSIS", meta: "香港中文大學 · 選課系統", url: "https://www.cuhk.edu.hk/cusis/" },
    { title: "University Grants Committee", meta: "香港大學教育資助委員會", url: "https://www.ugc.edu.hk/" },
  ],
  careers: [
    { title: "Immigration Arrangements for Non-local Graduates", meta: "香港入境事務處 · IANG", url: "https://www.immd.gov.hk/eng/services/visas/IANG.html" },
    { title: "Interactive Employment Service", meta: "香港勞工處", url: "https://www.jobs.gov.hk/" },
    { title: "Youth Employment Services", meta: "香港勞工處 · 青年就業", url: "https://www.yes.labour.gov.hk/" },
  ],
  general: [
    { title: "GovHK", meta: "香港政府一站通", url: "https://www.gov.hk/" },
    { title: "Education Bureau", meta: "香港教育局", url: "https://www.edb.gov.hk/" },
    { title: "University Grants Committee", meta: "香港大學教育資助委員會", url: "https://www.ugc.edu.hk/" },
  ],
};

const aiAnswerDetailSources = {
  "admissions-undergrad": [aiAnswerSources.admissions[0], aiAnswerSources.admissions[2]],
  "admissions-masters": [aiAnswerSources.admissions[1], aiAnswerSources.admissions[2]],
  "admissions-visa": [aiAnswerSources.admissions[2]],
  "housing-deposit": [aiAnswerSources.housing[0], aiAnswerSources.housing[2]],
  "housing-agent": [aiAnswerSources.housing[1], aiAnswerSources.housing[2]],
  "housing-contract": [aiAnswerSources.housing[0], aiAnswerSources.housing[1]],
  "courses-fixed": [aiAnswerSources.courses[0], aiAnswerSources.courses[1]],
  "courses-demand": [aiAnswerSources.courses[0], aiAnswerSources.courses[1]],
  "courses-exam": [aiAnswerSources.courses[0], aiAnswerSources.courses[2]],
  "careers-cv": [aiAnswerSources.careers[1], aiAnswerSources.careers[2]],
  "careers-portfolio": [aiAnswerSources.careers[1], aiAnswerSources.careers[2]],
  "careers-iang": [aiAnswerSources.careers[0], aiAnswerSources.careers[1]],
};

const aiAnswerLibrary = {
  "zh-Hant": {
    admissions: {
      title: "香港高校申請要先分清學歷層次與申請通道。",
      summary: "本科、授課型碩士與研究型學位的申請方式和時間線差異很大。先確認課程、身份與入學學期，再到院校官方系統建立申請。",
      bullets: [
        ["本科申請", "內地高考生通常依院校公布的內地招生安排申請；國際課程學生則按相應資格及招生通道遞交。"],
        ["碩士申請", "重點核對學位背景、GPA、語言要求、推薦信、個人陳述，以及課程是否採分輪錄取。"],
        ["博士申請", "先確認研究方向與導師匹配度，再準備研究計畫；部分項目鼓勵申請人預先聯絡導師。"],
        ["錄取之後", "非本地生通常還需處理學生簽證、住宿、保險與註冊文件，應為審批預留時間。"],
      ],
      followups: ["香港中文大學本科有哪些申請通道？", "申請香港碩士通常要準備哪些材料？", "非本地生的學生簽證要多久？"],
    },
    housing: {
      title: "租房先核對身份、合約與真實房況，再談價格。",
      summary: "香港租房節奏快，但不應在未看房、未核實業主或代理身份、未讀清合約前支付大額款項。通勤成本也要和租金一起計算。",
      bullets: [
        ["核實放盤", "確認代理牌照、業主或授權文件、單位地址與用途，不只依賴社交平台截圖。"],
        ["看清費用", "把按金、首期租金、代理佣金、水電網絡及可能的印花稅一併計入。"],
        ["留下證據", "入住前拍攝牆面、家電、水壓與門鎖，將維修責任和物品清單寫入合約。"],
        ["計算通勤", "以早晚高峰實測到校時間，留意尾班車與跨海交通，不只看地圖距離。"],
      ],
      followups: ["香港租房一般要付幾個月按金？", "怎樣核實地產代理牌照？", "合租時要把哪些條款寫進合約？"],
    },
    courses: {
      title: "先鎖定必修與硬性規則，再用偏好排序選修課。",
      summary: "選課最容易出錯的地方不是興趣，而是先修要求、課程衝堂、學分上限及不同學期的開課安排。AI 可以整理方案，但最後必須回校方系統確認。",
      bullets: [
        ["先放必修", "先輸入不能更改的必修課、已選課與固定活動，避免推薦方案建立在錯誤空檔上。"],
        ["檢查規則", "逐門核對先修、互斥課程、年級限制、學分與畢業要求，不把往年資料當成當期規則。"],
        ["平衡負擔", "同時考慮考試、閱讀、小組作業和通勤，避免多門高負擔課集中在同一週期。"],
        ["準備備選", "熱門課程至少準備兩組替代方案，並記下候補與加退選截止日期。"],
      ],
      followups: ["怎樣把必修課加入 AI 選課沙盤？", "選課時怎樣判斷搶課難度？", "沒有 Final Exam 的課一定比較輕鬆嗎？"],
    },
    careers: {
      title: "實習準備要同步處理職位匹配、作品證據與身份規則。",
      summary: "先用學校就業中心、官方招聘平台和公司網站找職位，再針對職位改寫履歷。非本地生亦應確認實習、兼職與畢業後工作的身份要求。",
      bullets: [
        ["找對入口", "優先查看學校 Career Centre、公司官網、勞工處平台及可信校友渠道。"],
        ["用證據說話", "把課堂專題、社團、研究或 Vibe Coding 原型整理成成果、角色和可量化影響。"],
        ["針對職位修改", "履歷與求職信應回應職位描述中的技能與場景，不使用同一版本海投。"],
        ["確認身份安排", "開始工作前向學校及入境處官方資料確認學生身份、實習與畢業後 IANG 安排。"],
      ],
      followups: ["香港實習履歷應該寫一頁還是兩頁？", "沒有本地工作經驗怎樣做作品集？", "IANG 申請前要準備什麼？"],
    },
  },
};

aiAnswerLibrary["zh-Hans"] = {
  admissions: { title: "香港高校申请要先分清学历层次与申请通道。", summary: "本科、授课型硕士与研究型学位的申请方式和时间线差异很大。先确认课程、身份与入学学期，再到院校官方系统建立申请。", bullets: [["本科申请", "内地高考生通常依院校公布的内地招生安排申请；国际课程学生则按相应资格及招生通道递交。"], ["硕士申请", "重点核对学位背景、GPA、语言要求、推荐信、个人陈述，以及课程是否采用分轮录取。"], ["博士申请", "先确认研究方向与导师匹配度，再准备研究计划；部分项目鼓励申请人预先联系导师。"], ["录取之后", "非本地生通常还需处理学生签证、住宿、保险与注册文件，应为审批预留时间。"]], followups: ["香港中文大学本科有哪些申请通道？", "申请香港硕士通常要准备哪些材料？", "非本地生的学生签证要多久？"] },
  housing: { title: "租房先核对身份、合同与真实房况，再谈价格。", summary: "香港租房节奏快，但不应在未看房、未核实业主或代理身份、未读清合同前支付大额款项。通勤成本也要和租金一起计算。", bullets: [["核实房源", "确认代理牌照、业主或授权文件、单位地址与用途，不只依赖社交平台截图。"], ["看清费用", "把押金、首期租金、代理佣金、水电网络及可能的印花税一并计入。"], ["留下证据", "入住前拍摄墙面、家电、水压与门锁，将维修责任和物品清单写入合同。"], ["计算通勤", "以早晚高峰实测到校时间，留意末班车与跨海交通，不只看地图距离。"]], followups: ["香港租房一般要付几个月押金？", "怎样核实地产代理牌照？", "合租时要把哪些条款写进合同？"] },
  courses: { title: "先锁定必修与硬性规则，再用偏好排序选修课。", summary: "选课最容易出错的地方不是兴趣，而是先修要求、课程冲突、学分上限及不同学期的开课安排。AI 可以整理方案，但最后必须回校方系统确认。", bullets: [["先放必修", "先输入不能更改的必修课、已选课与固定活动，避免推荐方案建立在错误空档上。"], ["检查规则", "逐门核对先修、互斥课程、年级限制、学分与毕业要求，不把往年资料当成当期规则。"], ["平衡负担", "同时考虑考试、阅读、小组作业和通勤，避免多门高负担课集中在同一周期。"], ["准备备选", "热门课程至少准备两组替代方案，并记下候补与加退选截止日期。"]], followups: ["怎样把必修课加入 AI 选课沙盘？", "选课时怎样判断抢课难度？", "没有 Final Exam 的课一定比较轻松吗？"] },
  careers: { title: "实习准备要同步处理职位匹配、作品证据与身份规则。", summary: "先用学校就业中心、官方招聘平台和公司网站找职位，再针对职位改写简历。非本地生也应确认实习、兼职与毕业后工作的身份要求。", bullets: [["找对入口", "优先查看学校 Career Centre、公司官网、劳工处平台及可信校友渠道。"], ["用证据说话", "把课堂项目、社团、研究或 Vibe Coding 原型整理成成果、角色和可量化影响。"], ["针对职位修改", "简历与求职信应回应职位描述中的技能与场景，不使用同一版本海投。"], ["确认身份安排", "开始工作前向学校及入境处官方资料确认学生身份、实习与毕业后 IANG 安排。"]], followups: ["香港实习简历应该写一页还是两页？", "没有本地工作经验怎样做作品集？", "IANG 申请前要准备什么？"] },
};

aiAnswerLibrary.en = {
  admissions: { title: "Start by separating the study level from the application route.", summary: "Undergraduate, taught postgraduate, and research degree applications follow different routes and timelines. Confirm the programme, applicant category, and intake before applying through the university's official system.", bullets: [["Undergraduate", "Mainland Gaokao and international-qualification applicants normally follow different published routes and requirements."], ["Taught postgraduate", "Check degree background, GPA, language scores, references, personal statement, and whether the programme reviews applications in rounds."], ["Research degree", "Match your research direction with potential supervisors and prepare a proposal; some programmes encourage early supervisor contact."], ["After an offer", "Non-local students usually need time for the student visa, housing, insurance, and registration documents."]], followups: ["Which undergraduate routes does CUHK offer?", "What documents do Hong Kong master's programmes usually require?", "How long does a Hong Kong student visa take?"] },
  housing: { title: "Verify the listing, contract, and actual condition before negotiating price.", summary: "Hong Kong rentals move quickly, but you should not make a large payment before viewing the flat, checking the owner or agent, and reading the agreement. Include commuting cost in the decision.", bullets: [["Verify the listing", "Check the agent licence, owner or authorisation documents, address, and permitted use rather than relying on social screenshots."], ["Count every cost", "Include deposit, advance rent, commission, utilities, internet, and possible stamp duty."], ["Keep evidence", "Photograph walls, appliances, water pressure, and locks before moving in, and document repairs and inventory."], ["Test the commute", "Check peak-hour travel and last services, especially for cross-harbour journeys."]], followups: ["How much deposit is common in Hong Kong?", "How do I verify an estate agent licence?", "Which clauses matter most in a shared flat agreement?"] },
  courses: { title: "Lock required courses and hard rules before ranking electives.", summary: "The biggest course-planning risks are prerequisites, timetable clashes, credit limits, and semester availability. AI can organise options, but the final plan must be confirmed in the university system.", bullets: [["Add fixed courses first", "Enter required and already selected courses before asking AI to fill the remaining timetable."], ["Check hard rules", "Verify prerequisites, exclusions, year restrictions, credits, and graduation requirements for the current term."], ["Balance workload", "Consider exams, reading, group work, and commuting instead of counting contact hours alone."], ["Prepare alternatives", "Keep at least two alternatives for popular courses and note waitlist and add-drop deadlines."]], followups: ["How do I add required courses to the AI planner?", "How can I estimate course enrolment difficulty?", "Is a course without a final exam always lighter?"] },
  careers: { title: "Internship preparation combines role fit, evidence, and immigration rules.", summary: "Use university career centres, official job platforms, and company sites, then tailor your CV to each role. Non-local students should also verify rules for internships, part-time work, and post-study employment.", bullets: [["Use trusted channels", "Start with your Career Centre, employer websites, Labour Department platforms, and credible alumni networks."], ["Show evidence", "Turn coursework, societies, research, or Vibe Coding prototypes into outcomes, responsibilities, and measurable impact."], ["Tailor each application", "Match your CV and cover letter to the skills and situations in the job description."], ["Check status rules", "Confirm student, internship, and IANG arrangements with your university and official Immigration Department guidance."]], followups: ["Should a Hong Kong internship CV be one or two pages?", "How can I build a portfolio without local work experience?", "What should I prepare before applying for IANG?"] },
};

const aiAnswerDetails = {
  "zh-Hant": {
    "admissions-undergrad": { title: "本科申請先按學歷資格找到正確入口。", summary: "高考、IB、A-Level 與其他國際資格通常使用不同通道。先確認申請身份、入學年份和課程要求，再以院校招生頁的最新安排為準。", bullets: [["確認通道", "核對你是高考生、國際資格、本地或非本地申請人。"], ["整理要求", "列出成績、語言、選科及補充材料，避免只看最低分。"], ["建立時間線", "記下申請、補件、面試、確認錄取與簽證節點。"]], followups: ["申請香港碩士通常要準備哪些材料？", "非本地生的學生簽證要多久？", "本科申請如何比較不同學校要求？"] },
    "admissions-masters": { title: "碩士材料要同時證明學術能力與課程匹配。", summary: "不同課程對專業背景、GPA、語言與工作經驗要求不同。建議先做課程清單，再為每個項目準備對應版本。", bullets: [["基礎文件", "通常先整理成績單、學位證明、語言成績與身份文件。"], ["敘事材料", "個人陳述與履歷要回應課程方向，推薦信提供具體證據。"], ["分輪提交", "熱門項目可能分輪審核，提早準備並追蹤補件狀態。"]], followups: ["香港中文大學本科有哪些申請通道？", "研究型學位應該怎樣聯絡導師？", "非本地生的學生簽證要多久？"] },
    "admissions-visa": { title: "學生簽證要在錄取後預留文件與審批時間。", summary: "非本地生一般需由院校協助或擔保辦理。實際時長會受文件完整度、院校流程及入境處審批影響，不宜用單一日期倒推。", bullets: [["先看院校指引", "確認錄取條件、擔保表格、財力與住宿等文件清單。"], ["一次交齊", "姓名、證件號碼和課程資料要一致，缺件會拖慢流程。"], ["保留緩衝", "未獲正式批准前不要把不可退款行程排得太緊。"]], followups: ["錄取後還要完成哪些註冊步驟？", "申請香港碩士通常要準備哪些材料？", "到港前要準備哪些文件？"] },
    "housing-deposit": { title: "按金不是唯一前期成本，付款前先核對合約。", summary: "香港租務的付款組合會因放盤和合約而異。不要只問要付幾個月，還要把首期租金、佣金、印花與雜費一起計算。", bullets: [["拆開金額", "要求逐項列明按金、預付租金、佣金與其他費用。"], ["核對收款方", "確認業主或獲授權代理身份，索取正式收據。"], ["寫清退還", "把按金用途、扣款條件與退還時間寫進合約。"]], followups: ["怎樣核實地產代理牌照？", "合租時要把哪些條款寫進合約？", "入住前應該拍攝哪些證據？"] },
    "housing-agent": { title: "先查牌照與公司資料，再相信代理提供的放盤。", summary: "代理名片、社交帳號和聊天記錄不能代替正式核驗。付款或簽署文件前，應在監管機構渠道核對持牌人與公司。", bullets: [["核對姓名牌照", "確認持牌人姓名、牌照狀態與所屬代理公司。"], ["核對物業授權", "要求說明代表業主或租客的身份及利益關係。"], ["避免私下轉帳", "收款資料、公司名稱與文件不一致時先停止交易。"]], followups: ["香港租房一般要付幾個月按金？", "合租時要把哪些條款寫進合約？", "遇到可疑租房放盤怎樣處理？"] },
    "housing-contract": { title: "合租合約要把責任邊界寫得比口頭承諾更清楚。", summary: "除了租期與租金，還應明確室友變更、公共費用、維修、提前退租和按金分配，避免日後各自理解不同。", bullets: [["共同責任", "確認所有租客是否共同承擔全額租金及損壞責任。"], ["日常費用", "寫明水電網絡、清潔與公共用品如何分攤。"], ["退出機制", "約定換室友、提前退租、按金轉移與物品交接。"]], followups: ["香港租房一般要付幾個月按金？", "怎樣核實地產代理牌照？", "入住前應該拍攝哪些證據？"] },
    "courses-fixed": { title: "先放入不能移動的課，再讓 AI 填補剩餘空檔。", summary: "必修課、已選課和固定活動應作為硬限制。系統會先避開衝堂，再按目標門數、最低學分與偏好推薦其餘課程。", bullets: [["輸入固定資料", "加入課名、星期、開始結束時間、學分與考核方式。"], ["先做衝突檢查", "同一天重疊時段不應進入推薦結果。"], ["補齊目標", "AI 只在剩餘空檔中補足門數和最低目標學分。"]], followups: ["選課時怎樣判斷搶課難度？", "沒有 Final Exam 的課一定比較輕鬆嗎？", "怎樣生成沒有星期五課的方案？"] },
    "courses-demand": { title: "搶課難度應看名額、需求與替代性，不只看課名熱門。", summary: "MVP 的難度預測可綜合往期熱度、課程名額、必修需求和同時段替代課，但最終結果仍取決於校方當期安排。", bullets: [["看供需", "小班、必修需求高或跨院系熱門課通常更緊張。"], ["看限制", "年級、專業與先修限制會改變你實際可選的名額。"], ["備兩套方案", "為高難度課準備同學分、同能力方向的替代課。"]], followups: ["怎樣把必修課加入 AI 選課沙盤？", "沒有 Final Exam 的課一定比較輕鬆嗎？", "候補名單期間應該準備什麼？"] },
    "courses-exam": { title: "沒有 Final Exam 不代表課程一定更輕鬆。", summary: "考核可能改成多次小測、報告、展示或密集小組項目。比較負擔時要看整個學期的評核分布與截止日期。", bullets: [["讀評核比例", "比較考試、論文、展示、出席和小組作業的權重。"], ["看截止分布", "多門課在同一週交項目，壓力可能高於一次期末考。"], ["配合強項", "按你的寫作、演講、協作與應試偏好組合課程。"]], followups: ["選課時怎樣判斷搶課難度？", "怎樣平衡小組作業和閱讀量？", "怎樣把必修課加入 AI 選課沙盤？"] },
    "careers-cv": { title: "實習履歷長度要服從內容密度，不是越多越好。", summary: "多數學生可先以一頁呈現最相關經驗。只有研究、作品或經歷確實需要時才延伸，並確保第一頁已能說清匹配度。", bullets: [["對準職位", "保留與職位技能最相關的課程、項目與經驗。"], ["寫成果", "用行動、方法和結果描述貢獻，不只列職責。"], ["方便掃描", "統一日期、標題和動詞，讓招聘者快速抓到重點。"]], followups: ["沒有本地工作經驗怎樣做作品集？", "IANG 申請前要準備什麼？", "怎樣把課堂項目寫成履歷成果？"] },
    "careers-portfolio": { title: "沒有本地工作經驗，也可以用可驗證項目建立作品集。", summary: "課堂專題、研究、社群服務與 Vibe Coding 原型都能成為案例，關鍵是清楚展示問題、你的角色、決策與結果。", bullets: [["選三個案例", "優先挑與目標職位最接近、能展示不同能力的作品。"], ["呈現過程", "保留需求、迭代、測試與反思，不只放最終畫面。"], ["提供證據", "加入連結、數據、用戶回饋或可操作示例。"]], followups: ["香港實習履歷應該寫一頁還是兩頁？", "IANG 申請前要準備什麼？", "Vibe Coding 項目怎樣寫進作品集？"] },
    "careers-iang": { title: "IANG 準備要同時核對資格、文件與就業時間線。", summary: "申請條件和所需文件應以入境處最新頁面為準。畢業、簽證到期與入職日期之間要留有處理空間。", bullets: [["確認身份", "核對你是否屬於合資格的非本地畢業生及適用申請類別。"], ["整理文件", "預先準備旅行證件、畢業證明及官方要求的相關材料。"], ["安排時間", "把學校發證、申請處理和僱主入職安排放在同一時間線。"]], followups: ["香港實習履歷應該寫一頁還是兩頁？", "沒有本地工作經驗怎樣做作品集？", "學生簽證到期前要注意什麼？"] },
  },
};

aiAnswerDetails["zh-Hans"] = {
  "admissions-undergrad": { title: "本科申请先按学历资格找到正确入口。", summary: "高考、IB、A-Level 与其他国际资格通常使用不同通道。先确认申请身份、入学年份和课程要求，再以院校招生页的最新安排为准。", bullets: [["确认通道", "核对你是高考生、国际资格、本地或非本地申请人。"], ["整理要求", "列出成绩、语言、选科及补充材料，避免只看最低分。"], ["建立时间线", "记下申请、补件、面试、确认录取与签证节点。"]], followups: ["申请香港硕士通常要准备哪些材料？", "非本地生的学生签证要多久？", "本科申请如何比较不同学校要求？"] },
  "admissions-masters": { title: "硕士材料要同时证明学术能力与课程匹配。", summary: "不同课程对专业背景、GPA、语言与工作经验要求不同。建议先做课程清单，再为每个项目准备对应版本。", bullets: [["基础文件", "通常先整理成绩单、学位证明、语言成绩与身份文件。"], ["叙事材料", "个人陈述与简历要回应课程方向，推荐信提供具体证据。"], ["分轮提交", "热门项目可能分轮审核，提早准备并追踪补件状态。"]], followups: ["香港中文大学本科有哪些申请通道？", "研究型学位应该怎样联系导师？", "非本地生的学生签证要多久？"] },
  "admissions-visa": { title: "学生签证要在录取后预留文件与审批时间。", summary: "非本地生一般需由院校协助或担保办理。实际时长会受文件完整度、院校流程及入境处审批影响，不宜用单一日期倒推。", bullets: [["先看院校指引", "确认录取条件、担保表格、财力与住宿等文件清单。"], ["一次交齐", "姓名、证件号码和课程资料要一致，缺件会拖慢流程。"], ["保留缓冲", "未获正式批准前不要把不可退款行程排得太紧。"]], followups: ["录取后还要完成哪些注册步骤？", "申请香港硕士通常要准备哪些材料？", "到港前要准备哪些文件？"] },
  "housing-deposit": { title: "押金不是唯一前期成本，付款前先核对合同。", summary: "香港租务的付款组合会因房源和合同而异。不要只问要付几个月，还要把首期租金、佣金、印花与杂费一起计算。", bullets: [["拆开金额", "要求逐项列明押金、预付租金、佣金与其他费用。"], ["核对收款方", "确认业主或获授权代理身份，索取正式收据。"], ["写清退还", "把押金用途、扣款条件与退还时间写进合同。"]], followups: ["怎样核实地产代理牌照？", "合租时要把哪些条款写进合同？", "入住前应该拍摄哪些证据？"] },
  "housing-agent": { title: "先查牌照与公司资料，再相信代理提供的房源。", summary: "代理名片、社交账号和聊天记录不能代替正式核验。付款或签署文件前，应在监管机构渠道核对持牌人与公司。", bullets: [["核对姓名牌照", "确认持牌人姓名、牌照状态与所属代理公司。"], ["核对物业授权", "要求说明代表业主或租客的身份及利益关系。"], ["避免私下转账", "收款资料、公司名称与文件不一致时先停止交易。"]], followups: ["香港租房一般要付几个月押金？", "合租时要把哪些条款写进合同？", "遇到可疑租房房源怎样处理？"] },
  "housing-contract": { title: "合租合同要把责任边界写得比口头承诺更清楚。", summary: "除了租期与租金，还应明确室友变更、公共费用、维修、提前退租和押金分配，避免日后各自理解不同。", bullets: [["共同责任", "确认所有租客是否共同承担全额租金及损坏责任。"], ["日常费用", "写明水电网络、清洁与公共用品如何分摊。"], ["退出机制", "约定换室友、提前退租、押金转移与物品交接。"]], followups: ["香港租房一般要付几个月押金？", "怎样核实地产代理牌照？", "入住前应该拍摄哪些证据？"] },
  "courses-fixed": { title: "先放入不能移动的课，再让 AI 填补剩余空档。", summary: "必修课、已选课和固定活动应作为硬限制。系统会先避开冲突，再按目标门数、最低学分与偏好推荐其余课程。", bullets: [["输入固定资料", "加入课名、星期、开始结束时间、学分与考核方式。"], ["先做冲突检查", "同一天重叠时段不应进入推荐结果。"], ["补齐目标", "AI 只在剩余空档中补足门数和最低目标学分。"]], followups: ["选课时怎样判断抢课难度？", "没有 Final Exam 的课一定比较轻松吗？", "怎样生成没有星期五课的方案？"] },
  "courses-demand": { title: "抢课难度应看名额、需求与替代性，不只看课程热门。", summary: "MVP 的难度预测可综合往期热度、课程名额、必修需求和同时段替代课，但最终结果仍取决于校方当期安排。", bullets: [["看供需", "小班、必修需求高或跨院系热门课通常更紧张。"], ["看限制", "年级、专业与先修限制会改变你实际可选的名额。"], ["备两套方案", "为高难度课准备同学分、同能力方向的替代课。"]], followups: ["怎样把必修课加入 AI 选课沙盘？", "没有 Final Exam 的课一定比较轻松吗？", "候补名单期间应该准备什么？"] },
  "courses-exam": { title: "没有 Final Exam 不代表课程一定更轻松。", summary: "考核可能改成多次小测、报告、展示或密集小组项目。比较负担时要看整个学期的评核分布与截止日期。", bullets: [["读评核比例", "比较考试、论文、展示、出席和小组作业的权重。"], ["看截止分布", "多门课在同一周交项目，压力可能高于一次期末考。"], ["配合强项", "按你的写作、演讲、协作与应试偏好组合课程。"]], followups: ["选课时怎样判断抢课难度？", "怎样平衡小组作业和阅读量？", "怎样把必修课加入 AI 选课沙盘？"] },
  "careers-cv": { title: "实习简历长度要服从内容密度，不是越多越好。", summary: "多数学生可先以一页呈现最相关经验。只有研究、作品或经历确实需要时才延伸，并确保第一页已能说清匹配度。", bullets: [["对准职位", "保留与职位技能最相关的课程、项目与经验。"], ["写成果", "用行动、方法和结果描述贡献，不只列职责。"], ["方便扫描", "统一日期、标题和动词，让招聘者快速抓到重点。"]], followups: ["没有本地工作经验怎样做作品集？", "IANG 申请前要准备什么？", "怎样把课堂项目写成简历成果？"] },
  "careers-portfolio": { title: "没有本地工作经验，也可以用可验证项目建立作品集。", summary: "课堂项目、研究、社群服务与 Vibe Coding 原型都能成为案例，关键是清楚展示问题、你的角色、决策与结果。", bullets: [["选三个案例", "优先挑与目标职位最接近、能展示不同能力的作品。"], ["呈现过程", "保留需求、迭代、测试与反思，不只放最终画面。"], ["提供证据", "加入链接、数据、用户反馈或可操作示例。"]], followups: ["香港实习简历应该写一页还是两页？", "IANG 申请前要准备什么？", "Vibe Coding 项目怎样写进作品集？"] },
  "careers-iang": { title: "IANG 准备要同时核对资格、文件与就业时间线。", summary: "申请条件和所需文件应以入境处最新页面为准。毕业、签证到期与入职日期之间要留有处理空间。", bullets: [["确认身份", "核对你是否属于合资格的非本地毕业生及适用申请类别。"], ["整理文件", "预先准备旅行证件、毕业证明及官方要求的相关材料。"], ["安排时间", "把学校发证、申请处理和雇主入职安排放在同一时间线。"]], followups: ["香港实习简历应该写一页还是两页？", "没有本地工作经验怎样做作品集？", "学生签证到期前要注意什么？"] },
};

aiAnswerDetails.en = {
  "admissions-undergrad": { title: "Choose the undergraduate route that matches your qualification.", summary: "Gaokao, IB, A-Level, and other qualifications usually use different routes. Confirm applicant status, intake, and programme requirements on the official admissions page.", bullets: [["Identify the route", "Check whether you apply through Gaokao, international qualifications, or a local route."], ["Map requirements", "List grades, language, subject requirements, and supporting documents."], ["Build a timeline", "Track application, interview, offer, acceptance, and visa milestones."]], followups: ["What documents do Hong Kong master's programmes usually require?", "How long does a Hong Kong student visa take?", "How should I compare undergraduate requirements?"] },
  "admissions-masters": { title: "A master's application must show both academic readiness and programme fit.", summary: "Requirements differ by programme. Build a shortlist first, then prepare tailored materials for each degree rather than sending one generic application.", bullets: [["Core documents", "Prepare transcripts, degree proof, language results, and identity documents."], ["Narrative materials", "Align your statement, CV, and references with the programme."], ["Review rounds", "Submit early when programmes review applications in rounds and monitor missing items."]], followups: ["Which undergraduate routes does CUHK offer?", "How should I contact a research supervisor?", "How long does a Hong Kong student visa take?"] },
  "admissions-visa": { title: "Leave time for documents and processing after receiving an offer.", summary: "Non-local students generally apply with university sponsorship or assistance. Timing varies with document completeness, university handling, and Immigration Department review.", bullets: [["Follow university steps", "Check the offer conditions, sponsorship forms, finance, and accommodation documents."], ["Keep details consistent", "Names, passport numbers, and programme details must match across forms."], ["Keep a buffer", "Avoid tight non-refundable travel plans before formal approval."]], followups: ["What registration steps follow an offer?", "What documents do master's programmes require?", "Which documents should I carry to Hong Kong?"] },
  "housing-deposit": { title: "A deposit is only one part of the upfront rental cost.", summary: "Payment structures vary. Add advance rent, commission, stamp-related charges, and utilities before deciding whether a flat fits your budget.", bullets: [["Separate each amount", "Ask for an itemised list of deposit, rent, commission, and fees."], ["Verify the payee", "Confirm the owner or authorised agent and request formal receipts."], ["Document refunds", "Put deductions, conditions, and return timing in the agreement."]], followups: ["How do I verify an estate agent licence?", "Which clauses matter in a shared flat agreement?", "What evidence should I photograph before moving in?"] },
  "housing-agent": { title: "Verify the licence and company before trusting a listing.", summary: "A profile, name card, or chat history is not formal verification. Check the agent and company through the regulator before paying or signing.", bullets: [["Match identity", "Confirm the agent name, licence status, and company."], ["Check authority", "Ask who the agent represents and how the property was authorised."], ["Pause on mismatches", "Do not transfer money when payee, company, and documents conflict."]], followups: ["How much deposit is common in Hong Kong?", "Which clauses matter in a shared flat agreement?", "What should I do with a suspicious listing?"] },
  "housing-contract": { title: "A shared-flat agreement should make responsibilities explicit.", summary: "Beyond rent and term, cover roommate changes, shared bills, repairs, early exit, and deposit allocation so verbal promises do not become disputes.", bullets: [["Joint responsibility", "Check whether each tenant can be liable for the full rent or damage."], ["Shared expenses", "Define utilities, internet, cleaning, and household costs."], ["Exit process", "Set rules for replacement tenants, early exit, deposits, and inventory."]], followups: ["How much deposit is common in Hong Kong?", "How do I verify an estate agent licence?", "What evidence should I photograph before moving in?"] },
  "courses-fixed": { title: "Add immovable courses before AI fills the remaining gaps.", summary: "Required, selected, and fixed commitments should become hard constraints. AI can then avoid clashes and fill remaining course and minimum-credit targets.", bullets: [["Enter fixed data", "Add course, day, start and end time, credits, and assessment."], ["Check conflicts first", "Overlapping sessions must be excluded from recommendations."], ["Fill the target", "Only use remaining slots to reach the course and credit goals."]], followups: ["How can I estimate enrolment difficulty?", "Is a course without a final exam always lighter?", "How can I keep Friday free?"] },
  "courses-demand": { title: "Enrolment difficulty depends on supply, demand, and alternatives.", summary: "The MVP can combine past interest, class size, required demand, and alternatives. The university's current allocation rules remain decisive.", bullets: [["Estimate demand", "Small classes and widely required or cross-faculty courses tend to fill faster."], ["Check restrictions", "Year, major, and prerequisite limits change your actual access."], ["Prepare two plans", "Keep alternatives with comparable credits and learning outcomes."]], followups: ["How do I add required courses to the planner?", "Is a course without a final exam always lighter?", "What should I do while waitlisted?"] },
  "courses-exam": { title: "No final exam does not automatically mean a lighter course.", summary: "Assessment may shift to quizzes, reports, presentations, or intensive group work. Compare the full semester workload and deadline distribution.", bullets: [["Read the weighting", "Compare exams, essays, presentations, attendance, and group work."], ["Map deadlines", "Several project deadlines in one week can exceed one final exam."], ["Match strengths", "Balance writing, presenting, teamwork, and test-taking preferences."]], followups: ["How can I estimate enrolment difficulty?", "How can I balance group work and reading?", "How do I add required courses to the planner?"] },
  "careers-cv": { title: "CV length should follow relevance, not volume.", summary: "Most students can start with one focused page. Extend only when research, projects, or experience genuinely need space, and keep the strongest evidence on page one.", bullets: [["Target the role", "Keep courses, projects, and experience that match the role."], ["Show outcomes", "Describe action, method, and result instead of duties alone."], ["Make it scannable", "Use consistent dates, headings, and action verbs."]], followups: ["How can I build a portfolio without local experience?", "What should I prepare before IANG?", "How do I turn coursework into CV achievements?"] },
  "careers-portfolio": { title: "Verifiable projects can build a portfolio without local work experience.", summary: "Coursework, research, community work, and Vibe Coding prototypes can all become cases when they show the problem, your role, decisions, and outcomes.", bullets: [["Choose three cases", "Select work closest to the target role and show different strengths."], ["Show the process", "Include requirements, iterations, tests, and reflection."], ["Add evidence", "Link prototypes, data, user feedback, or live examples."]], followups: ["Should an internship CV be one or two pages?", "What should I prepare before IANG?", "How do I present a Vibe Coding project?"] },
  "careers-iang": { title: "IANG preparation combines eligibility, documents, and an employment timeline.", summary: "Use the latest Immigration Department requirements. Leave space between graduation documents, visa expiry, processing, and the employer's start date.", bullets: [["Confirm eligibility", "Check your non-local graduate category and applicable route."], ["Prepare documents", "Gather travel documents, graduation proof, and official supporting materials."], ["Align timing", "Put university issuance, processing, and onboarding on one timeline."]], followups: ["Should an internship CV be one or two pages?", "How can I build a portfolio without local experience?", "What should I watch before my student visa expires?"] },
};

const plannerFacultyCatalog = {
  arts: {
    label: "文學與人文學院",
    majors: ["中文", "英文", "翻譯", "歷史", "哲學", "文化研究"],
    requirements: ["語言及人文基礎", "專業核心與高階選修", "畢業論文、專題或整合課程"],
  },
  business: {
    label: "商學院",
    majors: ["工商管理", "會計", "金融", "市場學", "商業分析", "經濟學"],
    requirements: ["會計、經濟與統計基礎", "專業核心及先修課鏈", "商業案例、實習或畢業專題"],
  },
  computing: {
    label: "計算機、數據與工程學院",
    majors: ["計算機科學", "人工智能", "數據科學", "電子工程", "資訊系統", "金融科技"],
    requirements: ["數學、統計與編程基礎", "專業核心及實驗課", "Capstone、專題或工程實習"],
  },
  science: {
    label: "理學院",
    majors: ["生物科學", "化學", "數學", "物理", "環境科學", "統計學"],
    requirements: ["學科基礎與實驗課", "專業核心及高階選修", "研究訓練或畢業專題"],
  },
  social: {
    label: "社會科學與公共政策學院",
    majors: ["社會科學", "公共政策", "心理學", "社會學", "政治學", "國際關係"],
    requirements: ["社會研究方法與統計", "專業理論及香港／亞洲議題", "研究專題、實習或服務學習"],
  },
  creative: {
    label: "傳理、設計與創意學院",
    majors: ["傳播學", "新聞學", "媒體與設計", "電影", "視覺藝術", "創意媒體"],
    requirements: ["媒體、設計與文化基礎", "工作室及專業選修", "作品集或畢業創作"],
  },
  education: {
    label: "教育學院",
    majors: ["教育學", "幼兒教育", "英語教育", "中文教育", "特殊教育", "健康教育"],
    requirements: ["教育基礎與教學法", "主修學科及專業培訓", "學校體驗、實習或畢業專題"],
  },
  health: {
    label: "健康與生命科學學院",
    majors: ["護理學", "公共衞生", "生物醫學", "康復科學", "食品科學", "運動科學"],
    requirements: ["生命科學與專業基礎", "實驗、臨床或實務訓練", "專業實習及畢業要求"],
  },
};

const plannerSchools = {
  hku: {
    name: "香港大學 HKU", system: "HKU SIS", prefix: "CAES", credits: 6,
    faculties: ["arts", "business", "computing", "science", "social", "education", "health"],
    degree: { total: 240, common: 54, programme: 96, elective: 90 },
    seniorDegree: { total: 120, common: 12, programme: 72, elective: 36 },
    transferDegree: { total: 180, common: 42, programme: 96, elective: 42 },
    pg: { taught: 60, research: 12, phd: 18 },
    commonExamples: ["Common Core 課程", "學術英語／中文", "AI Literacy"],
    source: "https://aas.hku.hk/ug-cur/",
    seniorSource: "https://commoncore.hku.hk/advstgcrt/",
    pgSource: "https://gradsch.hku.hk/",
  },
  cuhk: {
    name: "香港中文大學 CUHK", system: "CUHK CUSIS", prefix: "UGFN", credits: 3,
    faculties: ["arts", "business", "computing", "science", "social", "education", "health"],
    degree: { total: 123, common: 39, programme: 60, elective: 24 },
    seniorDegree: { total: 60, common: 9, programme: 51, elective: 0 },
    transferDegree: { total: 99, common: 30, programme: 60, elective: 9 },
    pg: { taught: 24, research: 12, phd: 12 },
    commonExamples: ["大學通識教育", "中文／英文語文", "數字素養及體育"],
    source: "https://admission.cuhk.edu.hk/why-cuhk/undergraduate-curriculum/",
    seniorSource: "https://www.res.cuhk.edu.hk/cusis/transfer-credit-exemption/info-on-course-and-unit-exemptions-for-undergraduate-students/",
    pgSource: "https://www.gs.cuhk.edu.hk/",
  },
  hkust: {
    name: "香港科技大學 HKUST", system: "HKUST SIS", prefix: "CORE", credits: 3,
    faculties: ["computing", "science", "business", "social"],
    degree: { total: 120, common: 36, programme: 66, elective: 18 },
    seniorDegree: { total: 60, common: 15, programme: 45, elective: 0 },
    transferDegree: { total: 90, common: 27, programme: 54, elective: 9 },
    pg: { taught: 30, research: 12, phd: 15 },
    commonExamples: ["Common Core", "English Communication", "Healthy Lifestyle"],
    source: "https://prog-crs.hkust.edu.hk/ugprog",
    seniorSource: "https://join.hkust.edu.hk/admissions/post-secondary",
    pgSource: "https://prog-crs.hkust.edu.hk/pgprog",
  },
  cityu: {
    name: "香港城市大學 CityU", system: "CityU AIMS", prefix: "GE", credits: 3,
    faculties: ["business", "computing", "science", "social", "creative", "health"],
    degree: { total: 120, common: 30, programme: 72, elective: 18 },
    seniorDegree: { total: 60, common: 12, programme: 45, elective: 3 },
    transferDegree: { total: 91, common: 22, programme: 57, elective: 12 },
    pg: { taught: 30, research: 7, phd: 14 },
    commonExamples: ["Gateway Education", "大學英語／中文文化", "Whole Person Development"],
    source: "https://www.cityu.edu.hk/catalogue/ug/current/",
    seniorSource: "https://www.cityu.edu.hk/admo/admissions/non-jupas-senior-year-admission",
    pgSource: "https://www.cityu.edu.hk/pg/",
  },
  polyu: {
    name: "香港理工大學 PolyU", system: "PolyU eStudent", prefix: "APSS", credits: 3,
    faculties: ["business", "computing", "science", "social", "creative", "health"],
    degree: { total: 120, common: 30, programme: 72, elective: 18 },
    seniorDegree: { total: 60, common: 9, programme: 51, elective: 0 },
    transferDegree: { total: 90, common: 21, programme: 60, elective: 9 },
    pg: { taught: 30, research: 9, phd: 15 },
    commonExamples: ["Language and Communication", "Cluster Area Requirements", "Service Learning／WIE"],
    source: "https://www.polyu.edu.hk/ar/students-in-taught-programmes/student-handbook/",
    seniorSource: "https://www.polyu.edu.hk/cus/student/senior-year-intakes-and-articulation-degree-programme/curriculum-framework/",
    pgSource: "https://www.polyu.edu.hk/study/pg/",
  },
  hkbu: {
    name: "香港浸會大學 HKBU", system: "HKBU BUniPort", prefix: "GCLA", credits: 3,
    faculties: ["arts", "business", "computing", "science", "social", "creative", "health"],
    degree: { total: 128, common: 38, programme: 72, elective: 18 },
    seniorDegree: { total: 64, common: 12, programme: 48, elective: 4 },
    transferDegree: { total: 96, common: 29, programme: 58, elective: 9 },
    pg: { taught: 30, research: 12, phd: 15 },
    commonExamples: ["University English／Chinese", "General Education", "GE Capstone"],
    source: "https://ar.hkbu.edu.hk/student-services/academic-registry-services/academic-calendar-and-catalogue",
    seniorSource: "https://admissions.hkbu.edu.hk/faq.html?tabs1=tab-2-tab&tabs2=tab-2-1-tab&tabs3=tab-2-4-tab",
    pgSource: "https://gs.hkbu.edu.hk/",
  },
  eduhk: {
    name: "香港教育大學 EdUHK", system: "EdUHK The Portal", prefix: "GEH", credits: 3,
    faculties: ["education", "arts", "social", "science", "creative"],
    degree: { total: 120, common: 30, programme: 72, elective: 18 },
    seniorDegree: { total: 60, common: 6, programme: 39, elective: 15 },
    transferDegree: { total: 90, common: 21, programme: 60, elective: 9 },
    pg: { taught: 30, research: 12, phd: 15 },
    commonExamples: ["General Education", "Language Enhancement", "Experiential Learning"],
    source: "https://www.eduhk.hk/acadprog/",
    seniorSource: "https://www.apply.eduhk.hk/ug/faq_senioryear",
    pgSource: "https://www.eduhk.hk/gradsch/",
  },
  lu: {
    name: "嶺南大學 LU", system: "Lingnan DegreeWorks", prefix: "CCC", credits: 3,
    faculties: ["arts", "business", "social", "computing"],
    degree: { total: 120, common: 33, programme: 69, elective: 18 },
    seniorDegree: { total: 60, common: 12, programme: 42, elective: 6 },
    transferDegree: { total: 90, common: 24, programme: 57, elective: 9 },
    pg: { taught: 30, research: 12, phd: 15 },
    commonExamples: ["Core Curriculum", "中文／英文語文", "Data and Digital Literacy"],
    source: "https://www.ln.edu.hk/admissions/ug",
    seniorSource: "https://www.ln.edu.hk/admissions/ug",
    pgSource: "https://www.ln.edu.hk/reg/academic-programmes/postgraduate-programmes",
  },
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
      { title: "AI 工具安全與學術誠信工作坊", type: "短課工作坊", day: "星期四", time: "10:30–12:20", hours: 2, load: "低", credits: 1, goals: ["safe", "career"] },
      { title: "數據視覺化衝刺", type: "技能微課", day: "星期五", time: "15:30–17:20", hours: 4, load: "中", credits: 2, goals: ["career", "explore"] },
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
      { title: "創業財務速成工作坊", type: "短課工作坊", day: "星期三", time: "15:30–17:20", hours: 2, load: "低", credits: 1, goals: ["safe", "career"] },
      { title: "市場驗證實驗", type: "技能微課", day: "星期五", time: "13:30–15:20", hours: 4, load: "中", credits: 2, goals: ["career", "explore"] },
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
      { title: "政策簡報工作坊", type: "短課工作坊", day: "星期四", time: "09:30–11:20", hours: 2, load: "低", credits: 1, goals: ["safe", "career"] },
      { title: "社區田野微專題", type: "技能微課", day: "星期五", time: "10:30–12:20", hours: 4, load: "中", credits: 2, goals: ["career", "explore"] },
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
      { title: "生成式內容版權工作坊", type: "短課工作坊", day: "星期四", time: "10:30–12:20", hours: 2, load: "低", credits: 1, goals: ["safe", "career"] },
      { title: "互動原型衝刺", type: "技能微課", day: "星期五", time: "10:30–12:20", hours: 4, load: "中", credits: 2, goals: ["career", "explore"] },
    ],
  },
};

const courseDetails = {
  "數據思維與程式設計": { description: "用資料拆解問題，練習基礎程式、視覺化與可重複的分析流程。", rush: "高", rushReason: "跨專業需求高，入門班次通常較快滿。" },
  "應用機器學習工作室": { description: "以真實資料完成模型、測試與作品展示，適合累積求職作品集。", rush: "高", rushReason: "工作室名額少，作品集導向課程關注度高。" },
  "AI 倫理與數據治理": { description: "從偏見、私隱和問責案例理解 AI 系統的社會與治理風險。", rush: "中", rushReason: "跨學科熱門，但通常有多個相近選修。" },
  "人本 AI 產品實驗室": { description: "從訪談、原型到可用性測試，設計真正回應使用者需要的 AI 工具。", rush: "高", rushReason: "小班專題制，座位與導師容量有限。" },
  "數據庫與資訊管理": { description: "理解資料模型、查詢與資訊系統，建立可落地的資料管理基礎。", rush: "中", rushReason: "專業選修需求穩定，熱門時段較快滿。" },
  "統計推理與決策": { description: "用機率、推論與不確定性支援商業和公共決策。", rush: "低", rushReason: "理論比重較高，通常仍有替代班次。" },
  "AI 工具安全與學術誠信工作坊": { description: "用真實情境練習引用、查證、私隱保護與負責任地使用生成式 AI。", rush: "中", rushReason: "一學分短課容易配入課表，開放後通常很快額滿。" },
  "數據視覺化衝刺": { description: "在兩週內把一組資料整理成可解讀的圖表、故事線與展示頁。", rush: "高", rushReason: "兩學分技能課時間短、作品明確，名額通常較少。" },
  "商業分析與決策": { description: "把營運、客戶與市場資料轉成可以執行的商業判斷。", rush: "高", rushReason: "商科與非商科學生都會選，需求集中。" },
  "金融科技產品實務": { description: "拆解支付、風控與數字金融產品，完成一個小型產品方案。", rush: "高", rushReason: "金融科技題材熱門，實務班名額有限。" },
  "香港商業環境": { description: "從公司、產業與制度案例理解香港市場的運作方式。", rush: "中", rushReason: "新生與交換生需求較高。" },
  "創業驗證工作室": { description: "以訪談和快速原型驗證需求，不只停留在商業計畫書。", rush: "高", rushReason: "跨院系組隊課程，熱門導師班次競爭較大。" },
  "會計與財務基礎": { description: "掌握報表、成本與現金流，建立後續商科課程需要的共同語言。", rush: "中", rushReason: "基礎要求廣，但通常開設較多班次。" },
  "消費者洞察與研究": { description: "用訪談、問卷和行為資料理解使用者，再轉化成產品或傳播策略。", rush: "中", rushReason: "研究實務受歡迎，早晚時段熱度差異明顯。" },
  "創業財務速成工作坊": { description: "用一學分掌握現金流、成本與簡易融資判斷，適合非商科創業者。", rush: "中", rushReason: "短課門檻低，創業團隊與跨院學生需求較高。" },
  "市場驗證實驗": { description: "以訪談、落地頁和小規模測試快速判斷一個需求是否值得繼續。", rush: "高", rushReason: "實作導向、兩學分易配課，熱門導師班次競爭較大。" },
  "公共政策分析": { description: "用問題界定、政策工具與成效評估比較不同公共方案。", rush: "中", rushReason: "核心課需求穩定，熱門老師班次先滿。" },
  "智慧城市與數字治理": { description: "以香港及亞洲案例分析平台、城市數據、AI 與公共治理。", rush: "高", rushReason: "題材新且跨學科，過往同類課程名額較緊。" },
  "社會研究方法": { description: "從研究問題到問卷、訪談和資料分析，完成一套可驗證的研究設計。", rush: "中", rushReason: "必修需求高，但一般會按主修安排容量。" },
  "香港社會與城市生活": { description: "從社區、住房、流動與文化理解香港城市日常。", rush: "高", rushReason: "本地脈絡課受留學生歡迎，下午班較熱門。" },
  "非牟利組織創新": { description: "與社會議題或機構場景連結，設計可驗證的服務與合作方案。", rush: "中", rushReason: "小組課有容量限制，但需求較分散。" },
  "經濟學與公共選擇": { description: "用誘因、制度和集體行動理解公共決策中的取捨。", rush: "低", rushReason: "理論與早課降低競爭，通常較易選入。" },
  "政策簡報工作坊": { description: "把複雜政策資料濃縮成一頁摘要與三分鐘口頭建議。", rush: "中", rushReason: "一學分實用短課受實習與求職學生歡迎。" },
  "社區田野微專題": { description: "用觀察、短訪談和現場記錄完成一個香港社區議題的小型研究。", rush: "高", rushReason: "兩學分且包含外出實作，導師可帶領人數有限。" },
  "數字敘事與內容策略": { description: "把研究、故事結構與平台格式結合，製作可發布的內容作品。", rush: "高", rushReason: "作品集導向明確，傳理與非傳理學生都關注。" },
  "AI 輔助創意實務": { description: "練習用生成式 AI 發想、製作和評估創意內容，同時處理版權與真實性。", rush: "高", rushReason: "AI 題材熱門，實作班次容量較小。" },
  "媒體研究方法": { description: "學習內容分析、受眾研究與訪談，為畢業專題建立研究基礎。", rush: "中", rushReason: "方法課需求穩定，熱門老師時段較緊。" },
  "香港文化與視覺傳播": { description: "從城市影像、展覽與流行文化理解香港如何被觀看和表達。", rush: "高", rushReason: "文化題材吸引交換生，選課初期熱度高。" },
  "互動體驗設計工作室": { description: "以使用者流程、原型與測試完成一個可操作的互動體驗。", rush: "高", rushReason: "設備與導師容量有限，工作室課座位少。" },
  "傳播理論導論": { description: "建立媒體、受眾與社會影響的核心概念，支援後續專業課。", rush: "低", rushReason: "基礎課通常有多班或較大容量。" },
  "生成式內容版權工作坊": { description: "辨識生成內容的授權、署名與素材風險，建立可交付的檢查清單。", rush: "中", rushReason: "AI 與版權需求快速增加，短課名額容易額滿。" },
  "互動原型衝刺": { description: "用兩學分完成從流程草圖到可測試原型的一次快速迭代。", rush: "高", rushReason: "作品集價值直接，工作坊設備與導師容量有限。" },
};

const finalExamCourses = new Set([
  "數據思維與程式設計",
  "AI 倫理與數據治理",
  "數據庫與資訊管理",
  "統計推理與決策",
  "商業分析與決策",
  "香港商業環境",
  "會計與財務基礎",
  "公共政策分析",
  "社會研究方法",
  "經濟學與公共選擇",
  "媒體研究方法",
  "傳播理論導論",
]);

let plannerVariation = 0;
let fixedCourses = [];
let activeDegreeCreditKey = "";
let degreeLongPressTimer = null;

const plannerEntryRoutes = {
  standard: {
    label: "四年制本科",
    help: "按完整四年制學位要求規劃。",
  },
  associate: {
    label: "副學士銜接學士",
    help: "通常由 Year 3 開始、約兩年完成；實際獲批學分及剩餘要求由院系審核。",
  },
  higherDiploma: {
    label: "高級文憑銜接學士",
    help: "通常採用高年級入學或銜接課程；部分通識獲縮減，但專業核心仍須完成。",
  },
  transfer: {
    label: "轉學／學分轉移",
    help: "先按學校轉學規則的保守基線規劃，收到正式轉移學分結果後再扣減。",
  },
};

const plannerStudyLevels = {
  pgTaught: { label: "授課型碩士", shortLabel: "授課型研究生" },
  pgResearch: { label: "研究型碩士 MPhil", shortLabel: "研究型研究生" },
  phd: { label: "博士 PhD", shortLabel: "博士研究生" },
};

function isPostgraduateLevel(year) {
  return Boolean(plannerStudyLevels[year]);
}

function studyPathLabel(state) {
  return isPostgraduateLevel(state.year)
    ? plannerStudyLevels[state.year].label
    : plannerEntryRoutes[state.entryRoute].label;
}

function timeToMinutes(value) {
  const [hours, minutes] = String(value).split(":").map(Number);
  return hours * 60 + minutes;
}

function courseTimes(course) {
  const [start, end] = course.time.split("–");
  return { start: timeToMinutes(start), end: timeToMinutes(end) };
}

function isGroupCourse(course) {
  return /小組|工作室|專題|實驗室/.test(`${course.type} ${course.title}`);
}

function coursesConflict(first, second) {
  if (first.day !== second.day) return false;
  const firstTimes = courseTimes(first);
  const secondTimes = courseTimes(second);
  return firstTimes.start < secondTimes.end && secondTimes.start < firstTimes.end;
}

function renderFixedCourses() {
  const list = document.querySelector("#fixedCourseList");
  if (!fixedCourses.length) {
    list.innerHTML = '<p class="fixed-course-empty">尚未加入固定課程。</p>';
    return;
  }
  list.innerHTML = fixedCourses
    .map((course, index) => `
      <div class="fixed-course-item">
        <div>
          <strong>${escapeHTML(course.title)}</strong>
          <small>${escapeHTML(course.day)} ${escapeHTML(course.time)} · ${course.credits} 學分 · ${course.finalExam ? "有 Final Exam" : "無 Final Exam"}</small>
        </div>
        <button class="fixed-course-remove" data-fixed-index="${index}" type="button" aria-label="移除 ${escapeHTML(course.title)}">×</button>
      </div>
    `)
    .join("");
}

function populateTargetCreditOptions() {
  const creditSelect = document.querySelector("#targetCredits");
  const currentValue = Number(creditSelect.value) || 12;
  creditSelect.innerHTML = Array.from({ length: 36 }, (_, index) => index + 1)
    .map((credits) => `<option value="${credits}">至少 ${credits} 學分</option>`)
    .join("");
  creditSelect.value = String(Math.min(36, Math.max(1, currentValue)));
}

function populatePlannerMajorOptions() {
  const facultyKey = document.querySelector("#plannerFaculty").value;
  const faculty = plannerFacultyCatalog[facultyKey];
  const majorOptions = document.querySelector("#plannerMajorOptions");
  majorOptions.innerHTML = (faculty?.majors || [])
    .map((major) => `<option value="${escapeHTML(major)}"></option>`)
    .join("");
}

function populatePlannerFacultyOptions() {
  const school = plannerSchools[document.querySelector("#plannerSchool").value];
  const facultySelect = document.querySelector("#plannerFaculty");
  const previousValue = facultySelect.value;
  facultySelect.innerHTML = school.faculties
    .map((facultyKey) => `<option value="${facultyKey}">${escapeHTML(plannerFacultyCatalog[facultyKey].label)}</option>`)
    .join("");
  facultySelect.value = school.faculties.includes(previousValue)
    ? previousValue
    : school.faculties.includes("social") ? "social" : school.faculties[0];
  populatePlannerMajorOptions();
}

function degreeProfileForState(state, school) {
  if (state.year === "pgTaught") {
    const capstone = school.pg.taught >= 50 ? 6 : 3;
    const elective = school.pg.taught >= 50 ? 18 : school.pg.taught >= 30 ? 9 : 6;
    return {
      mode: "postgraduate",
      values: { total: school.pg.taught, common: school.pg.taught - elective - capstone, programme: elective, elective: capstone },
      labels: { total: "課程總學分基線", common: "核心及必修課", programme: "認可選修課", elective: "Capstone／項目" },
      note: "授課型碩士按該校常見課程規模建立規劃基線；不同專業可能使用不同學分制，須以課程手冊為準。",
    };
  }

  if (state.year === "pgResearch" || state.year === "phd") {
    const total = state.year === "phd" ? school.pg.phd : school.pg.research;
    const methods = Math.min(total, state.year === "phd" ? 3 : 2);
    return {
      mode: "research",
      values: { total, common: methods, programme: Math.max(0, total - methods), elective: "必修" },
      labels: { total: "最低課程學分", common: "研究方法與倫理", programme: "學科／研究訓練", elective: "論文及口試" },
      note: `${plannerStudyLevels[state.year].label}同時包含課程、研究進度審查及論文要求；個別院系可訂立更高學分門檻。`,
    };
  }

  if (state.entryRoute === "associate" || state.entryRoute === "higherDiploma") {
    return {
      mode: "senior",
      values: school.seniorDegree,
      labels: { total: "最低剩餘修讀學分", common: "剩餘共同核心／通識", programme: "院系及專業課", elective: "可用選修學分" },
      note: `${school.name}高年級入學以 ${school.seniorDegree.total} 學分作兩年規劃基線；錄取信、學分轉移表及院系課程表優先於本示例。`,
    };
  }

  if (state.entryRoute === "transfer") {
    return {
      mode: "transfer",
      values: school.transferDegree,
      labels: { total: "轉學後規劃學分", common: "共同核心／通識", programme: "院系及專業課", elective: "可用選修學分" },
      note: `${school.name}轉學生先按 ${school.transferDegree.total} 學分的保守基線排課；收到正式轉移學分結果後，數字會再按已獲豁免課程扣減。`,
    };
  }

  return {
    mode: "undergraduate",
    values: school.degree,
    labels: { total: "畢業總學分", common: "共同核心／通識", programme: "院系及專業範圍", elective: "選修規劃空間" },
    note: "院系、雙主修、交換及不同入學學年可改變分配；生成課表前請按官方手冊核對。",
  };
}

function degreeCreditExplanations(state, profile) {
  const route = plannerEntryRoutes[state.entryRoute];
  const school = plannerSchools[state.schoolKey];
  const faculty = plannerFacultyCatalog[state.facultyKey] || plannerFacultyCatalog[school.faculties[0]];
  const postgraduate = isPostgraduateLevel(state.year);
  const seniorEntry = profile.mode === "senior" || profile.mode === "transfer";
  const commonExamples = school.commonExamples.join("、");
  const programmeExamples = faculty.requirements.join("、");

  if (profile.mode === "research") {
    return {
      total: {
        title: profile.labels.total,
        description: `${profile.values.total} 是本校研究學位的課程學分規劃基線，論文研究通常另行註冊，不等同把論文換算進這個數字。`,
        checks: ["院系指定的核心研究課", "每學期研究進度及最低 GPA", "全日制／兼讀制修讀期限"],
      },
      common: {
        title: profile.labels.common,
        description: "這一框放研究設計、量化或質性方法、研究倫理與學術誠信等跨研究題目的訓練。",
        checks: ["Research Methods／Advanced Methods", "Research Ethics／Responsible Conduct of Research", "資料管理、私隱或實驗安全訓練"],
      },
      programme: {
        title: profile.labels.programme,
        description: `這一框放與論文領域直接相關的高階課，例如${programmeExamples}，以及院系指定的研討課。`,
        checks: ["導師及研究生課程主任批准的科目", "高階專題、研究研討會或閱讀課", "博士生的核心課及跨院研究訓練"],
      },
      elective: {
        title: profile.labels.elective,
        description: "這不是普通選修學分框，而是研究學位的必修里程碑，包括論文、口試與階段審查。",
        checks: ["MPhil／PhD Thesis 註冊與提交", "研究計劃或確認資格審查", state.year === "phd" ? "博士資格考試及最終口試" : "論文口試及修訂完成"],
      },
    };
  }

  if (profile.mode === "postgraduate") {
    return {
      total: {
        title: profile.labels.total,
        description: `${profile.values.total} 是目前用於排課的授課型碩士總學分基線，須完成所有必修、選修及項目類別。`,
        checks: ["課程手冊列出的畢業總學分", "最低 GPA 及最長修讀期限", "不可重複計算或用本科課替代的科目"],
      },
      common: {
        title: profile.labels.common,
        description: `這一框放課程規定每位學生都要修的科目，例如${programmeExamples}。`,
        checks: ["Programme Core／Required Courses", "研究方法、統計或專業實務", "指定修讀學期及先修條件"],
      },
      programme: {
        title: profile.labels.programme,
        description: "這一框放課程清單內可選的專業科目，用來建立專修方向或補足技能。",
        checks: ["只計入課程認可的選修清單", "跨院選修是否需要批准", "部分熱門課設有名額或背景限制"],
      },
      elective: {
        title: profile.labels.elective,
        description: "這一框放畢業項目、實務專題、顧問項目或論文選項，是否必修取決於專業。",
        checks: ["Capstone Project／Dissertation", "實習或行業項目能否計分", "提交、展示與口試時限"],
      },
    };
  }

  return {
    total: {
      title: profile.labels.total,
      description: seniorEntry
        ? `${profile.values.total} 是目前用於規劃的剩餘修讀範圍，不代表副學士或高級文憑的所有舊學分會自動獲批。`
        : `${profile.values.total} 是完成學位的整體門檻，單純累積到這個數字仍不等於符合畢業資格。`,
      checks: ["同時完成所有分類要求及指定必修", "符合最低 GPA、修讀年限及駐校學分要求", seniorEntry ? "確認院系正式批出的入學／轉移學分" : "留意重修、重複計算及不計入畢業的課程"],
    },
    common: {
      title: profile.labels.common,
      description: `這一框放全校學生都要完成的課，例如${commonExamples}；不是你主修名稱相近的課就一定能計入。`,
      checks: ["在學校系統中標為 Common Core／GE／Language 的課", "每個範疇須修多少門及最遲完成年級", seniorEntry ? "查看哪些共同要求已由銜接或轉移學分豁免" : "確認不可重複計算、先修或非學分要求"],
    },
    programme: {
      title: profile.labels.programme,
      description: `這一框放院系及主修課，具體包括${programmeExamples}。只有課程手冊列入 Major Core、Required Major 或 Major Elective 的科目才計入。`,
      checks: ["先修課是否已完成，避免延後整條課程鏈", "核心、指定選修及高階課各自的最低學分", "Capstone、實習、專業認證或畢業論文要求"],
    },
    elective: {
      title: profile.labels.elective,
      description: "這一框放不必計入主修的認可學分，例如跨院選修、副修科目、交換課或獲批准的實習課；它不是任意課都能填滿的空位。",
      checks: ["課程是否標為 Free Elective／University Elective", "副修、第二主修或交換課會佔用多少空間", "部分課程可能受院系、年級、名額或先修限制"],
    },
    route: {
      title: route.label,
      description: route.help,
      checks: ["入學通知書列明的修讀年級", "院系批出的學分轉移／豁免清單", "該入學學年適用的課程手冊版本"],
    },
  };
}

function showDegreeCreditDetail(key) {
  const state = plannerState();
  const school = plannerSchools[state.schoolKey];
  const profile = degreeProfileForState(state, school);
  const copy = degreeCreditExplanations(state, profile)[key];
  const detail = document.querySelector("#degreeCreditDetail");
  if (!copy || !detail) return;
  activeDegreeCreditKey = key;
  document.querySelectorAll(".degree-credit-item").forEach((item) => {
    const isActive = item.dataset.creditKey === key;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-expanded", String(isActive));
  });
  detail.hidden = false;
  detail.innerHTML = `
    <div class="degree-detail-head"><span class="degree-info-mark">i</span><strong>${escapeHTML(copy.title)}</strong><small>點選或長按查看</small></div>
    <p>${escapeHTML(copy.description)}</p>
    <ul>${copy.checks.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
  `;
}

function syncEntryRouteUI(adjustYear = false) {
  const year = document.querySelector("#plannerYear").value;
  const entryRouteField = document.querySelector("#plannerEntryRouteField");
  const postgraduate = isPostgraduateLevel(year);
  entryRouteField.hidden = postgraduate;
  if (postgraduate) return;

  const routeKey = document.querySelector("#plannerEntryRoute").value;
  const route = plannerEntryRoutes[routeKey];
  const school = plannerSchools[document.querySelector("#plannerSchool").value];
  const concreteHelp = routeKey === "associate" || routeKey === "higherDiploma"
    ? `${route.help} ${school.name}目前以 ${school.seniorDegree.total} 學分作規劃基線。`
    : routeKey === "transfer"
      ? `${route.help} ${school.name}目前以 ${school.transferDegree.total} 學分作保守規劃基線。`
      : route.help;
  document.querySelector("#entryRouteHelp").textContent = concreteHelp;
  if (adjustYear && (routeKey === "associate" || routeKey === "higherDiploma")) {
    document.querySelector("#plannerYear").value = "3";
  }
}

function renderDegreeRequirements(state = plannerState()) {
  const school = plannerSchools[state.schoolKey];
  const faculty = plannerFacultyCatalog[state.facultyKey] || plannerFacultyCatalog[school.faculties[0]];
  const profile = degreeProfileForState(state, school);
  const majorName = state.major || "尚未填寫專業";
  const postgraduate = isPostgraduateLevel(state.year);
  const seniorEntry = state.entryRoute === "associate" || state.entryRoute === "higherDiploma";
  const requiredItems = state.year === "pgTaught"
    ? ["課程核心及指定必修", "認可專業選修", "Capstone、實務項目或論文（按課程）"]
    : state.year === "pgResearch"
      ? ["研究方法與研究倫理", "導師批准的學科課及研討課", "MPhil 論文、進度審查及口試"]
      : state.year === "phd"
        ? ["博士核心及研究訓練", "資格／確認考試及年度進度審查", "原創博士論文及最終口試"]
    : seniorEntry
      ? ["院系批出的轉移／入學學分", "縮減後仍須完成的全校要求", ...faculty.requirements]
      : ["大學共同核心、通識及語言要求", ...faculty.requirements];
  const creditKeys = ["total", "common", "programme", "elective"];

  document.querySelector("#degreeRequirementSummary").innerHTML = `
    <div class="degree-summary-head">
      <div>
        <span class="degree-kicker">AI 學分要求識別</span>
        <strong>${escapeHTML(school.name)} · ${escapeHTML(state.cohort)} 入學</strong>
        <small>${escapeHTML(faculty.label)} · ${escapeHTML(majorName)} · ${escapeHTML(studyPathLabel(state))}</small>
      </div>
      <span class="degree-reference-badge">MVP 規劃參考</span>
    </div>
    <div class="degree-credit-grid">
      ${creditKeys.map((key) => `
        <button class="degree-credit-item" type="button" data-credit-key="${key}" aria-expanded="false" aria-controls="degreeCreditDetail" title="點選或長按查看${escapeHTML(profile.labels[key])}的具體要求">
          <span class="degree-info-icon" aria-hidden="true">i</span>
          <strong>${escapeHTML(String(profile.values[key]))}</strong>
          <span>${escapeHTML(profile.labels[key])}</span>
        </button>
      `).join("")}
    </div>
    <div class="degree-credit-detail" id="degreeCreditDetail" hidden></div>
    <div class="degree-required-block">
      <strong>AI 找到的必修類別</strong>
      <ul>${requiredItems.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </div>
    <div class="degree-source-row">
      <p>${escapeHTML(profile.note)}</p>
      <a href="${postgraduate ? school.pgSource : seniorEntry || state.entryRoute === "transfer" ? school.seniorSource : school.source}" target="_blank" rel="noopener noreferrer" title="前往 ${escapeHTML(school.name)} 官方網站">${postgraduate ? "前往學校官方研究生課程頁" : "前往學校官方本科課程頁"} ↗</a>
    </div>
  `;
  if (activeDegreeCreditKey) showDegreeCreditDetail(activeDegreeCreditKey);
}

function plannerState() {
  return {
    schoolKey: document.querySelector("#plannerSchool").value,
    facultyKey: document.querySelector("#plannerFaculty").value,
    cohort: document.querySelector("#plannerCohort").value,
    entryRoute: document.querySelector("#plannerEntryRoute").value,
    year: document.querySelector("#plannerYear").value,
    major: document.querySelector("#plannerMajor").value.trim(),
    trackKey: document.querySelector("#plannerTrack").value,
    goal: document.querySelector('input[name="plannerGoal"]:checked')?.value || "career",
    targetCourses: Number(document.querySelector("#targetCourses").value),
    targetCredits: Number(document.querySelector("#targetCredits").value),
    preferredFreeDay: document.querySelector("#preferredFreeDay").value,
    earliestStart: timeToMinutes(document.querySelector("#earliestStart").value),
    latestEnd: timeToMinutes(document.querySelector("#latestEnd").value),
    maxWeeklyHours: Number(document.querySelector("#maxWeeklyHours").value),
    groupWorkTolerance: document.querySelector("#groupWorkTolerance").value,
    finalExamPreference: document.querySelector("#finalExamPreference").value,
    balancedLoad: document.querySelector("#balancedLoad").checked,
    compactDays: document.querySelector("#compactDays").checked,
    avoidTightGaps: document.querySelector("#avoidTightGaps").checked,
  };
}

function courseCode(school, year, index) {
  const level = isPostgraduateLevel(year) ? 5 : Math.min(4, Number(year) + 1);
  return `${school.prefix}${level}${index + 1}0`;
}

function courseCombinations(items, size, start = 0, current = [], results = []) {
  if (current.length === size) {
    results.push([...current]);
    return results;
  }
  for (let index = start; index <= items.length - (size - current.length); index += 1) {
    current.push(items[index]);
    courseCombinations(items, size, index + 1, current, results);
    current.pop();
  }
  return results;
}

function selectCourseCombination(items, targetCourses, targetCredits, finalExamPreference, existingFinalExamCount = 0) {
  const size = Math.min(targetCourses, items.length);
  if (size <= 0) return [];
  const combinations = courseCombinations(items, size);
  const best = combinations
    .map((courses) => {
      const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
      const preferenceScore = courses.reduce((sum, course) => sum + course.score, 0);
      const finalExamCount = existingFinalExamCount + courses.filter((course) => course.finalExam).length;
      const examPenalty = finalExamPreference === "avoid"
        ? finalExamCount * 10
        : finalExamPreference === "allowOne"
          ? Math.max(0, finalExamCount - 1) * 14
          : finalExamPreference === "prefer"
            ? (courses.length - finalExamCount) * 5
            : 0;
      const creditPenalty = totalCredits < targetCredits
        ? (targetCredits - totalCredits) * 12
        : (totalCredits - targetCredits) * 0.7;
      return { courses, score: preferenceScore - creditPenalty - examPenalty };
    })
    .sort((first, second) => second.score - first.score)[0];
  return best?.courses || items.slice(0, size);
}

function renderTimetableImage(courses, school, state) {
  const canvas = document.createElement("canvas");
  canvas.width = 1400;
  canvas.height = 880;
  const context = canvas.getContext("2d");
  const weekdays = ["星期一", "星期二", "星期三", "星期四", "星期五"];
  const startHour = 8;
  const endHour = 20;
  const gutter = 112;
  const top = 150;
  const right = 32;
  const bottom = 38;
  const gridWidth = canvas.width - gutter - right;
  const gridHeight = canvas.height - top - bottom;
  const dayWidth = gridWidth / weekdays.length;
  const hourHeight = gridHeight / (endHour - startHour);

  context.fillStyle = "#fffaf2";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#171614";
  context.font = "700 38px Arial, sans-serif";
  context.fillText("留了麼 AI 周課表", 40, 54);
  context.fillStyle = "#6f675e";
  context.font = "22px Arial, sans-serif";
  context.fillText(`${school.name} · ${courses.length} 門 · ${courses.reduce((sum, course) => sum + course.credits, 0)} 學分`, 40, 92);
  context.font = "18px Arial, sans-serif";
  context.fillText(`目標：${state.targetCourses} 門 / 至少 ${state.targetCredits} 學分`, 40, 122);

  context.textAlign = "center";
  weekdays.forEach((day, index) => {
    const x = gutter + index * dayWidth;
    context.fillStyle = index % 2 ? "#f5eee3" : "#efe7dc";
    context.fillRect(x, top - 42, dayWidth, 42);
    context.fillStyle = "#171614";
    context.font = "700 19px Arial, sans-serif";
    context.fillText(day, x + dayWidth / 2, top - 15);
  });

  context.textAlign = "right";
  for (let hour = startHour; hour <= endHour; hour += 1) {
    const y = top + (hour - startHour) * hourHeight;
    context.strokeStyle = hour % 2 === 0 ? "#cfc6ba" : "#e4ddd3";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(gutter, y);
    context.lineTo(canvas.width - right, y);
    context.stroke();
    if (hour < endHour) {
      context.fillStyle = "#6f675e";
      context.font = "15px Arial, sans-serif";
      context.fillText(`${String(hour).padStart(2, "0")}:00`, gutter - 14, y + 5);
    }
  }

  weekdays.forEach((_, index) => {
    const x = gutter + index * dayWidth;
    context.strokeStyle = "#d8d0c5";
    context.beginPath();
    context.moveTo(x, top - 42);
    context.lineTo(x, canvas.height - bottom);
    context.stroke();
  });
  context.beginPath();
  context.moveTo(canvas.width - right, top - 42);
  context.lineTo(canvas.width - right, canvas.height - bottom);
  context.stroke();

  courses.forEach((course, courseIndex) => {
    const dayIndex = weekdays.indexOf(course.day);
    if (dayIndex < 0) return;
    const times = courseTimes(course);
    const y = top + ((Math.max(times.start, startHour * 60) - startHour * 60) / 60) * hourHeight;
    const rawHeight = ((Math.min(times.end, endHour * 60) - Math.max(times.start, startHour * 60)) / 60) * hourHeight;
    const inset = courseIndex % 2 ? 8 : 5;
    const x = gutter + dayIndex * dayWidth + inset;
    const width = dayWidth - inset - 7;
    const height = Math.max(48, rawHeight - 4);
    context.fillStyle = course.fixed ? "#f6d4c8" : "#d8eee8";
    context.strokeStyle = course.fixed ? "#e43b32" : "#0f7773";
    context.lineWidth = 3;
    context.fillRect(x, y + 2, width, height);
    context.strokeRect(x, y + 2, width, height);
    context.textAlign = "left";
    context.fillStyle = "#171614";
    context.font = "700 16px Arial, sans-serif";
    const shortTitle = course.title.length > 13 ? `${course.title.slice(0, 13)}…` : course.title;
    context.fillText(shortTitle, x + 10, y + 26, width - 20);
    context.fillStyle = "#4f4841";
    context.font = "14px Arial, sans-serif";
    context.fillText(course.time, x + 10, y + 49, width - 20);
    if (height > 74) context.fillText(`${course.credits} 學分 · ${course.finalExam ? "有 Final" : "無 Final"}`, x + 10, y + 70, width - 20);
  });

  document.querySelector("#timetableImage").src = canvas.toDataURL("image/png");
}

function renderPlannerPlan() {
  const state = plannerState();
  const school = plannerSchools[state.schoolKey];
  const faculty = plannerFacultyCatalog[state.facultyKey];
  const track = plannerTracks[state.trackKey];
  renderDegreeRequirements(state);
  const goalLabels = { safe: "穩妥畢業", career: "求職導向", explore: "興趣探索" };
  const fixedCredits = fixedCourses.reduce((sum, course) => sum + course.credits, 0);
  const fixedFinalExamCount = fixedCourses.filter((course) => course.finalExam).length;
  const recommendedCourseTarget = Math.max(0, state.targetCourses - fixedCourses.length);
  const recommendedCreditTarget = Math.max(0, state.targetCredits - fixedCredits);
  const dayFrequency = track.courses.reduce((result, course) => ({ ...result, [course.day]: (result[course.day] || 0) + 1 }), {});
  const scoredCourses = track.courses
    .map((course, index) => {
      const details = courseDetails[course.title] || { description: "結合概念、案例與實作，建立可延伸到後續課程的能力。", rush: "中", rushReason: "需求與開班容量大致平衡。" };
      const times = courseTimes(course);
      const finalExam = finalExamCourses.has(course.title);
      const conflictsFixedCourse = fixedCourses.some((fixedCourse) => coursesConflict(course, fixedCourse));
      let score = course.goals.includes(state.goal) ? 12 : 2;
      score += times.start < state.earliestStart ? -9 : 2;
      score += times.end > state.latestEnd ? -7 : 1;
      if (state.preferredFreeDay) score += course.day === state.preferredFreeDay ? -12 : 2;
      if (state.balancedLoad) score += course.load === "高" ? -2 : 3;
      if (state.groupWorkTolerance === "low") score += isGroupCourse(course) ? -8 : 2;
      if (state.groupWorkTolerance === "high") score += isGroupCourse(course) ? 4 : 0;
      if (state.compactDays) score += (dayFrequency[course.day] - 1) * 3;
      if (state.maxWeeklyHours <= 24) score += course.hours >= 8 ? -4 : 2;
      if (state.finalExamPreference === "avoid") score += finalExam ? -8 : 3;
      if (state.finalExamPreference === "prefer") score += finalExam ? 4 : -2;
      if (conflictsFixedCourse) score -= 60;
      score += ((index + plannerVariation) % 4) * 0.35;
      return { ...course, ...details, credits: course.credits || school.credits, finalExam, conflictsFixedCourse, sourceIndex: index, score, startMinutes: times.start, endMinutes: times.end };
    })
    .sort((a, b) => b.score - a.score);

  const recommended = selectCourseCombination(scoredCourses, recommendedCourseTarget, recommendedCreditTarget, state.finalExamPreference, fixedFinalExamCount);
  const selected = [...fixedCourses, ...recommended];
  const earlyCount = selected.filter((course) => course.startMinutes < state.earliestStart).length;
  const lateCount = selected.filter((course) => course.endMinutes > state.latestEnd).length;
  const freeDayCount = selected.filter((course) => course.day === state.preferredFreeDay).length;
  const highLoadCount = selected.filter((course) => course.load === "高").length;
  const highRushCount = selected.filter((course) => course.rush === "高").length;
  const finalExamCount = selected.filter((course) => course.finalExam).length;
  const groupCourseCount = selected.filter(isGroupCourse).length;
  const tightGapCount = selected.reduce((count, course, index) => {
    const hasTightPair = selected.slice(index + 1).some((other) => {
      if (other.day !== course.day) return false;
      const gap = Math.max(other.startMinutes, course.startMinutes) - Math.min(other.endMinutes, course.endMinutes);
      return gap < 45;
    });
    return count + Number(hasTightPair);
  }, 0);
  const hardConflictCount = selected.reduce((count, course, index) => (
    count + Number(selected.slice(index + 1).some((other) => coursesConflict(course, other)))
  ), 0);
  const weeklyHours = selected.reduce((sum, course) => sum + course.hours, 0);
  const preferencePenalty = earlyCount * 4 + lateCount * 3 + freeDayCount * 4 + Math.max(0, highLoadCount - 1) * 3 + Math.max(0, weeklyHours - state.maxWeeklyHours) / 2 + (state.avoidTightGaps ? tightGapCount * 4 : 0);
  const match = Math.max(76, 94 - preferencePenalty + (plannerVariation % 2));
  const coverageBase = state.goal === "safe" ? 84 : state.goal === "career" ? 76 : 68;
  const coverage = Math.min(94, coverageBase + (state.year === "4" ? 5 : state.year === "1" ? -3 : 0) + Math.max(0, selected.length - 4) * 2);
  const mediumRisk = preferencePenalty >= 7 || highLoadCount >= 3 || highRushCount >= 3 || hardConflictCount > 0;
  const totalCredits = selected.reduce((sum, course) => sum + course.credits, 0);

  document.querySelector("#plannerSystemLabel").textContent = `模擬 ${school.system} · 示例資料`;
  document.querySelector("#plannerResultTitle").textContent = `${goalLabels[state.goal]} · ${state.major || track.label}`;
  document.querySelector("#plannerResultSummary").textContent = fixedCourses.length
    ? `已保留 ${fixedCourses.length} 門必修／已選課，AI 再按 ${school.name}、${faculty.label}、${studyPathLabel(state)}及 ${state.cohort} 入學要求補齊方案。`
    : `AI 按 ${school.name}、${faculty.label}、${state.major || "未指定專業"}、${studyPathLabel(state)}及 ${state.cohort} 入學要求，結合你的目標與時間偏好組合方案。`;
  document.querySelector("#matchScore").textContent = `${match}%`;
  document.querySelector("#heroMatchScore").textContent = match;
  document.querySelector("#coverageScore").textContent = `${coverage}%`;
  document.querySelector("#weeklyLoad").textContent = `${weeklyHours}h`;
  document.querySelector("#creditSummary").textContent = `${selected.length} 門 · ${totalCredits} 學分`;
  const riskElement = document.querySelector("#riskLevel");
  riskElement.textContent = mediumRisk ? "中" : "低";
  riskElement.className = mediumRisk ? "risk-medium" : "risk-low";
  document.querySelector("#riskHint").textContent = hardConflictCount ? "發現時間衝堂" : mediumRisk ? "有偏好衝突" : "無硬性衝堂";

  document.querySelector("#coursePlanList").innerHTML = selected
    .map((course) => {
      const discussionIndex = questions.findIndex((question) => question.courseTitle === course.title || question.title.includes(course.title));
      const reviewLink = discussionIndex >= 0
        ? `<button class="course-review-link" data-question-index="${discussionIndex}" type="button">查看 ${questions[discussionIndex].comments.length} 條同學評價</button>`
        : "";
      return `
        <article class="course-row ${course.fixed ? "is-fixed" : ""}">
          <span class="course-code">${course.fixed ? "已選" : escapeHTML(courseCode(school, state.year, course.sourceIndex))}</span>
          <div class="course-copy">
            <strong>${escapeHTML(course.title)}</strong>
            <small>${course.fixed ? "必修／已選 · AI 保留" : `${escapeHTML(course.type)} · AI 推薦`}</small>
            <p>${escapeHTML(course.description)}</p>
            ${reviewLink}
          </div>
          <div class="course-schedule">
            <span class="course-time">${escapeHTML(course.day)} ${escapeHTML(course.time)}</span>
            <div class="course-signals">
              <span class="course-credit">${course.credits} 學分</span>
              <span class="course-final ${course.finalExam ? "" : "no-final"}">${course.finalExam ? "有 Final" : "無 Final"}</span>
              <span class="course-load ${course.load === "高" ? "high" : ""}">${course.fixed ? "已固定" : `${escapeHTML(course.load)}負擔`}</span>
              ${course.fixed ? "" : `<span class="course-rush rush-${course.rush === "高" ? "high" : course.rush === "低" ? "low" : "medium"}" title="${escapeHTML(course.rushReason)}">搶課難度 ${escapeHTML(course.rush)}</span>`}
            </div>
            <small class="course-rush-reason">${course.fixed ? "你已鎖定這門課，AI 只會調整其餘推薦。" : escapeHTML(course.rushReason)}</small>
          </div>
        </article>
      `;
    })
    .join("");

  const reasons = [
    fixedCourses.length ? `先鎖定 ${fixedCourses.length} 門必修／已選課，再用剩餘 ${recommendedCourseTarget} 個位置做推薦。` : "目前沒有固定課程，AI 可在全部位置中尋找最佳組合。",
    state.goal === "career"
      ? `優先保留能產出作品或職場案例的課程，讓「${track.label}」方向更容易放進履歷。`
      : state.goal === "safe"
        ? "優先安排基礎與必修示例課，降低延後先修鏈的風險。"
        : "在核心課之外保留跨學科課程，讓你能測試新興趣。",
    earlyCount === 0 ? "方案符合你設定的最早上課時間。" : `仍保留 ${earlyCount} 門較早時段課，因為它們對目前目標的權重較高。`,
    state.preferredFreeDay
      ? freeDayCount === 0
        ? `${state.preferredFreeDay}已空出，可用於實習、活動或集中完成作業。`
        : `${state.preferredFreeDay}仍有 ${freeDayCount} 門課，AI 已降低它們的排序權重。`
      : state.compactDays
        ? "AI 優先選擇可集中上課日的組合，減少零碎通勤。"
        : "課程分散在不同上課日，保留較均勻的學習節奏。",
    state.balancedLoad ? `高負擔課程控制在 ${highLoadCount} 門，其餘用中低負擔課平衡。` : "本方案更重視目標匹配，未主動壓低小組作業與閱讀量。",
    state.groupWorkTolerance === "low" ? `小組型課程控制在 ${groupCourseCount} 門。` : `目前組合包含 ${groupCourseCount} 門小組或工作室課程。`,
    state.finalExamPreference === "avoid"
      ? `方案把有 Final Exam 的課程控制在 ${finalExamCount} 門。`
      : state.finalExamPreference === "allowOne"
        ? `方案優先把 Final Exam 控制在 1 門內，目前為 ${finalExamCount} 門。`
        : state.finalExamPreference === "prefer"
          ? `方案偏好考試型評核，目前有 ${finalExamCount} 門設有 Final Exam。`
          : `目前有 ${finalExamCount} 門設有 Final Exam。`,
    state.avoidTightGaps && tightGapCount === 0 ? "同日課程之間保留了至少 45 分鐘轉場時間。" : "同日課程較集中，請留意課室距離與休息時間。",
  ];
  document.querySelector("#plannerReasons").innerHTML = reasons.map((reason) => `<li>${escapeHTML(reason)}</li>`).join("");

  const warnings = [
    "課程名稱、時段與名額目前為 MVP 示例，提交前必須回校方系統核對。",
    "AI 不會代替你登入教務系統，也不會自動提交或退選課程。",
  ];
  if (earlyCount) warnings.unshift(`${earlyCount} 門課早於你設定的開始時間，請比較其他班次。`);
  if (lateCount) warnings.unshift(`${lateCount} 門課晚於你設定的結束時間，請確認回程安排。`);
  if (freeDayCount) warnings.unshift(`${freeDayCount} 門課仍在${state.preferredFreeDay}，因為目前示例選項不足。`);
  if (weeklyHours > state.maxWeeklyHours) warnings.unshift(`預計每週投入 ${weeklyHours} 小時，高於你設定的 ${state.maxWeeklyHours} 小時上限。`);
  if (fixedCourses.length > state.targetCourses) warnings.unshift(`你已加入 ${fixedCourses.length} 門固定課，超過目標 ${state.targetCourses} 門；AI 不會刪除你的固定課。`);
  if (hardConflictCount) warnings.unshift(`發現 ${hardConflictCount} 組時間重疊，請先調整固定課或選擇其他班次。`);
  if (state.finalExamPreference === "avoid" && finalExamCount) warnings.unshift(`仍有 ${finalExamCount} 門包含 Final Exam，因固定課或目標學分限制未能完全避開。`);
  if (state.finalExamPreference === "allowOne" && finalExamCount > 1) warnings.unshift(`目前有 ${finalExamCount} 門包含 Final Exam，高於你設定的最多 1 門。`);
  if (totalCredits < state.targetCredits) warnings.unshift(`目前示例組合為 ${totalCredits} 學分，仍低於最少目標 ${state.targetCredits} 學分。`);
  if (highRushCount) warnings.unshift(`${highRushCount} 門課預測搶課難度高，建議預先收藏替代課或班次。`);
  if (state.avoidTightGaps && tightGapCount) warnings.unshift(`${tightGapCount} 組課程的轉場少於 45 分鐘，請確認課室距離。`);
  if (highLoadCount >= 2) warnings.unshift("同時修讀多門高負擔課可能形成期中作業高峰，建議再查看評核日期。 ");
  document.querySelector("#plannerWarnings").innerHTML = warnings.map((warning) => `<li>${escapeHTML(warning)}</li>`).join("");
  renderTimetableImage(selected, school, state);
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
const aiAnswerInput = document.querySelector("#aiAnswerInput");
const aiAnswerOutput = document.querySelector("#aiAnswerOutput");
const LIVE_SEARCH_ORIGIN = "https://liumer-mvp.xiejisheng2005.chatgpt.site";
let aiSearchRequestId = 0;

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
      aiAnswer: "小留智答",
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
    aiAnswerCta: "小留智答",
    plannerCta: "AI 選課",
    askCta: "發問",
    heroTitle: "我是小留",
    shuffleTip: "換一句",
    topicHeading: "精準話題",
    tips: [
      "先問清楚你的學校、預算和時間，我再幫你把答案分成馬上做、可以等、不要踩三類。",
      "租房問題要寫清楚預算、通勤地點和可接受室友數，大家會更容易給你真實建議。",
      "畢業二手交易記得標明交收地點、物品狀態和原價，信任感會高很多。",
      "不要只收藏資訊，找一個同學一起去實測，留學體驗會完全不一樣。",
    ],
    commonTitle: "留學生常用入口",
    commonHint: "校園生活工具箱",
    commonEntries: [
      ["小留智答", "AI 整理答案、官方來源與延伸追問"],
      ["AI 選課沙盤", "先模擬課表，再進學校系統選課"],
      ["校園郵箱認證", "用學校郵箱加入學生社群"],
      ["高校圈", "查看港大、中大、科大等院校帖"],
      ["到港清單", "電話卡、銀行、住宿、選課"],
      ["學生禮遇", "咖啡、餐飲、文化活動的合作福利"],
    ],
    taskTitle: "本週任務",
    taskHint: "積分激勵",
    taskItems: ["完成校園郵箱認證（一次）", "發布完整問題（每日首 2 條）", "提供 40 字以上經驗（每日首 3 條）", "活動到場簽到"],
    memberTitle: "會員等級",
    currentLevelPrefix: "目前",
    memberLevels: [
      { level: "Lv.1 新來小留", standard: "0-179 積分", benefits: "瀏覽全部話題、收藏內容、報名免費活動" },
      { level: "Lv.2 探路小留", standard: "180-499 積分", benefits: "完成認證後可兌換貼紙、咖啡券和實用清單" },
      { level: "Lv.3 實測小留", standard: "500-999 積分", benefits: "熱門活動優先候補、二手內容優先展示" },
      { level: "Lv.4 小留夥伴", standard: "1000-1799 積分", benefits: "活動優先報名、CV 診斷與二手置頂福利" },
      { level: "Lv.5 社群嚮導", standard: "1800+ 積分", benefits: "可申請帶隊活動、參與內測與社群共創" },
    ],
    aiAsk: {
      eyebrow: "Liumer AI · 留學資訊整理",
      heading: "問小留，先看重點，再核對官方來源。",
      intro: "把分散的申請、選課、租房與生活資訊整理成可追問的答案；重要日期與資格仍以官方網站為準。",
      label: "你想了解什麼？",
      placeholder: "例如：香港中文大學怎樣申請？",
      submit: "整理答案",
      defaultQuery: "香港中文大學怎樣申請？",
      chips: [["大學申請", "香港中文大學怎樣申請？"], ["租房避坑", "香港留學生租房要注意什麼？"], ["選課安排", "香港大學選課怎樣避免衝堂？"], ["實習準備", "留學生在香港怎樣找實習？"]],
      answerLabel: "小留 AI 整理",
      demoNote: "MVP 示例知識庫",
      keyTips: "重點整理",
      sourcesTitle: "參考來源",
      sourcesHint: "優先列出大學及政府官方頁面",
      followupsTitle: "你可能還想問",
      followupsHint: "點一下可繼續追問",
      askMore: "接著問點什麼…",
      sourceLink: "查看來源",
      feedbackHelpful: "有幫助",
      feedbackUnhelpful: "需改善",
      disclaimer: "AI 可能遺漏或誤解資訊。申請資格、截止日期與費用請以院校官方網站最新公布為準。",
      searching: "正在搜尋最新網頁…",
      liveLabel: "即時網絡整理",
      offlineLabel: "網絡暫不可用 · 已顯示內建答案",
      liveTitle: "已從最新網頁結果整理這個問題。",
      liveSummary: "以下重點來自本次網絡搜尋的頁面摘要，請打開來源核對完整內容、日期與適用身份。",
      liveSourceHint: "即時搜尋結果 · 官方網站優先排列",
      searchedAt: "搜尋時間",
    },
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
      aiAnswer: "小留智答",
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
    aiAnswerCta: "小留智答",
    plannerCta: "AI 选课",
    askCta: "发问",
    heroTitle: "我是小留",
    shuffleTip: "换一句",
    topicHeading: "精准话题",
    tips: [
      "先说清楚你的学校、预算和时间，我再帮你把答案分成立即行动、可以等待和需要避坑三类。",
      "租房问题要写清预算、通勤地点和可接受的室友人数，大家会更容易给出真实建议。",
      "毕业二手交易记得标明交收地点、物品状态和原价，信任感会高很多。",
      "不要只收藏信息，找一位同学一起实测，留学体验会完全不一样。",
    ],
    commonTitle: "留学生常用入口",
    commonHint: "校园生活工具箱",
    commonEntries: [
      ["小留智答", "AI 整理答案、官方来源与延伸追问"],
      ["AI 选课沙盘", "先模拟课表，再进入学校系统选课"],
      ["校园邮箱认证", "使用学校邮箱加入学生社区"],
      ["高校圈", "查看港大、中大、科大等院校帖子"],
      ["到港清单", "电话卡、银行、住宿、选课"],
      ["学生礼遇", "咖啡、餐饮、文化活动的合作福利"],
    ],
    taskTitle: "本周任务",
    taskHint: "积分激励",
    taskItems: ["完成校园邮箱认证（一次）", "发布完整问题（每日前 2 条）", "提供 40 字以上经验（每日前 3 条）", "活动到场签到"],
    memberTitle: "会员等级",
    currentLevelPrefix: "当前",
    memberLevels: [
      { level: "Lv.1 新来小留", standard: "0-179 积分", benefits: "浏览全部话题、收藏内容、报名免费活动" },
      { level: "Lv.2 探路小留", standard: "180-499 积分", benefits: "完成认证后可兑换贴纸、咖啡券和实用清单" },
      { level: "Lv.3 实测小留", standard: "500-999 积分", benefits: "热门活动优先候补、二手内容优先展示" },
      { level: "Lv.4 小留伙伴", standard: "1000-1799 积分", benefits: "活动优先报名、CV 诊断与二手置顶福利" },
      { level: "Lv.5 社区向导", standard: "1800+ 积分", benefits: "可申请带队活动、参与内测与社区共创" },
    ],
    aiAsk: {
      eyebrow: "Liumer AI · 留学信息整理",
      heading: "问小留，先看重点，再核对官方来源。",
      intro: "把分散的申请、选课、租房与生活信息整理成可追问的答案；重要日期与资格仍以官方网站为准。",
      label: "你想了解什么？",
      placeholder: "例如：香港中文大学怎么申请？",
      submit: "整理答案",
      defaultQuery: "香港中文大学怎么申请？",
      chips: [["大学申请", "香港中文大学怎么申请？"], ["租房避坑", "香港留学生租房要注意什么？"], ["选课安排", "香港大学选课怎样避免冲堂？"], ["实习准备", "留学生在香港怎样找实习？"]],
      answerLabel: "小留 AI 整理",
      demoNote: "MVP 示例知识库",
      keyTips: "重点整理",
      sourcesTitle: "参考来源",
      sourcesHint: "优先列出大学及政府官方页面",
      followupsTitle: "你可能还想问",
      followupsHint: "点击即可继续追问",
      askMore: "接着问点什么…",
      sourceLink: "查看来源",
      feedbackHelpful: "有帮助",
      feedbackUnhelpful: "需改善",
      disclaimer: "AI 可能遗漏或误解信息。申请资格、截止日期与费用请以院校官方网站最新公布为准。",
      searching: "正在搜索最新网页…",
      liveLabel: "实时网络整理",
      offlineLabel: "网络暂不可用 · 已显示内置答案",
      liveTitle: "已从最新网页结果整理这个问题。",
      liveSummary: "以下重点来自本次网络搜索的页面摘要，请打开来源核对完整内容、日期与适用身份。",
      liveSourceHint: "实时搜索结果 · 官方网站优先排列",
      searchedAt: "搜索时间",
    },
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
      aiAnswer: "Liumer Answers",
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
    aiAnswerCta: "Liumer Answers",
    plannerCta: "AI Course Planner",
    askCta: "Ask",
    heroTitle: "Hi, I am Liumer",
    shuffleTip: "New tip",
    topicHeading: "Focused Topics",
    tips: [
      "Tell me your school, budget, and timing first. I will sort the advice into act now, can wait, and avoid.",
      "For housing questions, include your budget, commute destination, and preferred number of flatmates to get more useful advice.",
      "For graduate resale posts, include the pickup location, condition, and original price to build trust.",
      "Do not just bookmark information. Try it with another student and turn advice into your own Hong Kong experience.",
    ],
    commonTitle: "Student Shortcuts",
    commonHint: "Campus life toolkit",
    commonEntries: [
      ["Liumer Answers", "AI summaries with official sources and follow-up questions"],
      ["AI Course Planner", "Simulate a timetable before using your school system"],
      ["Campus Email Verification", "Join the student community with your school email"],
      ["School Circles", "Browse posts from HKU, CUHK, HKUST, and more"],
      ["Arrival Checklist", "SIM card, banking, housing, and course enrolment"],
      ["Student Perks", "Partner offers for coffee, dining, and culture"],
    ],
    taskTitle: "Weekly Tasks",
    taskHint: "Earn Liumer Points",
    taskItems: ["Verify your campus email (one time)", "Post a complete question (first 2 daily)", "Share 40+ characters of experience (first 3 daily)", "Check in at an event"],
    memberTitle: "Member Levels",
    currentLevelPrefix: "Current",
    memberLevels: [
      { level: "Lv.1 Newcomer", standard: "0-179 points", benefits: "Browse all topics, save content, and join free events" },
      { level: "Lv.2 Explorer", standard: "180-499 points", benefits: "After verification, redeem stickers, coffee vouchers, and practical guides" },
      { level: "Lv.3 Field Tester", standard: "500-999 points", benefits: "Priority waitlist for popular events and better visibility for resale posts" },
      { level: "Lv.4 Community Partner", standard: "1000-1799 points", benefits: "Priority event registration, CV review, and resale post boosts" },
      { level: "Lv.5 Community Guide", standard: "1800+ points", benefits: "Apply to lead events, join beta tests, and co-create the community" },
    ],
    aiAsk: {
      eyebrow: "Liumer AI · Student information guide",
      heading: "Get the key points first, then verify the official sources.",
      intro: "Turn scattered admissions, course, housing, and student-life information into a sourced answer you can continue exploring.",
      label: "What would you like to know?",
      placeholder: "For example: How do I apply to CUHK?",
      submit: "Build answer",
      defaultQuery: "How do I apply to CUHK?",
      chips: [["Admissions", "How do I apply to CUHK?"], ["Housing", "What should international students check before renting in Hong Kong?"], ["Course planning", "How can I avoid timetable clashes at a Hong Kong university?"], ["Internships", "How can international students prepare for internships in Hong Kong?"]],
      answerLabel: "Liumer AI summary",
      demoNote: "MVP sample knowledge base",
      keyTips: "Key guidance",
      sourcesTitle: "Reference sources",
      sourcesHint: "Official university and government pages are prioritised",
      followupsTitle: "You may also want to ask",
      followupsHint: "Select one to continue",
      askMore: "Ask a follow-up…",
      sourceLink: "Open source",
      feedbackHelpful: "Helpful",
      feedbackUnhelpful: "Needs work",
      disclaimer: "AI may miss or misinterpret information. Always verify eligibility, deadlines, and fees on the institution's latest official pages.",
      searching: "Searching the latest web pages…",
      liveLabel: "Live web summary",
      offlineLabel: "Live search unavailable · showing the built-in answer",
      liveTitle: "This answer has been organised from current web results.",
      liveSummary: "The key points below come from this search's page snippets. Open the sources to verify the full context, date, and applicant category.",
      liveSourceHint: "Live web results · official sources ranked first",
      searchedAt: "Searched",
    },
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
    item.innerHTML = ["aiAnswer", "aiPlanner"].includes(item.dataset.view) ? `<span class="ai-nav-mark">AI</span> ${escapeHTML(label)}` : escapeHTML(label);
  });
  setText(".points-panel > span", copy.pointsLabel);
  setText(".points-panel p", copy.pointsBody);
  setText(".topbar .eyebrow", copy.topEyebrow);
  setText(".topbar h1", copy.topTitle);
  setText("#openRegister", copy.registerCta);
  setText("#openAiAnswer", copy.aiAnswerCta);
  setText("#openPlanner", copy.plannerCta);
  setText("#openAsk", copy.askCta);
  setText(".hero-strip h2", copy.heroTitle);
  setText("#liumerLine", copy.tips[0]);
  setText("#shuffleTip", copy.shuffleTip);
  setText("#homeView .section-head h2", copy.topicHeading);
  setText("#homeView .right-rail .panel:nth-child(1) .panel-title h3", copy.commonTitle);
  setText("#homeView .right-rail .panel:nth-child(1) .panel-title span", copy.commonHint);
  document.querySelectorAll("#homeView .campus-list button").forEach((button, index) => {
    const entry = copy.commonEntries[index];
    if (!entry) return;
    setText(`#homeView .campus-list button:nth-child(${index + 1}) strong`, entry[0]);
    setText(`#homeView .campus-list button:nth-child(${index + 1}) span`, entry[1]);
  });
  setText("#homeView .right-rail .panel:nth-child(2) .panel-title h3", copy.taskTitle);
  setText("#homeView .right-rail .panel:nth-child(2) .panel-title span", copy.taskHint);
  document.querySelectorAll("#homeView .task-list li > span").forEach((item, index) => {
    if (copy.taskItems[index]) item.textContent = copy.taskItems[index];
  });
  setText("#homeView .right-rail .panel:nth-child(3) .panel-title h3", copy.memberTitle);
  setText("#aiAnswerEyebrow", copy.aiAsk.eyebrow);
  setText("#aiAnswerHeading", copy.aiAsk.heading);
  setText("#aiAnswerIntro", copy.aiAsk.intro);
  setText("#aiAnswerLabel", copy.aiAsk.label);
  aiAnswerInput.placeholder = copy.aiAsk.placeholder;
  aiAnswerInput.value = copy.aiAsk.defaultQuery;
  setText("#submitAiAnswer", copy.aiAsk.submit);
  document.querySelector("#aiPromptChips").innerHTML = copy.aiAsk.chips
    .map(([label, query]) => `<button type="button" data-ai-query="${escapeHTML(query)}">${escapeHTML(label)}</button>`)
    .join("");
  document.querySelector("#aiPromptChips").setAttribute("aria-label", copy.aiAsk.followupsTitle);
  renderAiAnswer(copy.aiAsk.defaultQuery);
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
  renderLevels();
  refreshPointsUI();
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
  const levels = currentCopy().memberLevels || memberLevels;
  if (points >= 1800) return levels[4];
  if (points >= 1000) return levels[3];
  if (points >= 500) return levels[2];
  if (points >= 180) return levels[1];
  return levels[0];
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
  const copy = currentCopy();
  const level = getMemberLevel();
  pointsBalance.textContent = points;
  currentLevel.textContent = level.level;
  document.querySelector("#miniLevelStatus").textContent = `${copy.currentLevelPrefix} ${level.level}`;
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

function detectAiAnswerIntent(query) {
  const normalized = query.toLocaleLowerCase();

  if (/(學生簽證|学生签证|study visa|student visa|entry permit|入境許可|入境许可)/i.test(normalized)) return { topic: "admissions", detail: "admissions-visa" };
  if (/(本科|高考|gaokao|undergraduate|a-level|ib\b)/i.test(normalized)) return { topic: "admissions", detail: "admissions-undergrad" };
  if (/(碩士|硕士|研究生|master|postgraduate|推薦信|推荐信|個人陳述|个人陈述)/i.test(normalized)) return { topic: "admissions", detail: "admissions-masters" };

  if (/(按金|押金|deposit|首期租金)/i.test(normalized)) return { topic: "housing", detail: "housing-deposit" };
  if (/(地產代理|地产代理|代理牌照|agent licence|agent license|estate agent|中介)/i.test(normalized)) return { topic: "housing", detail: "housing-agent" };
  if (/(合租|合約|合同|租約|租约|lease|tenancy agreement|室友)/i.test(normalized)) return { topic: "housing", detail: "housing-contract" };

  if (/(必修|已選|已选|固定課|固定课|required course|fixed course)/i.test(normalized)) return { topic: "courses", detail: "courses-fixed" };
  if (/(搶課|抢课|候補|候补|waitlist|enrolment difficulty|enrollment difficulty|熱門課|热门课)/i.test(normalized)) return { topic: "courses", detail: "courses-demand" };
  if (/(final exam|期末考|考試|考试|評核|评核|assessment)/i.test(normalized)) return { topic: "courses", detail: "courses-exam" };

  if (/(作品集|portfolio)/i.test(normalized)) return { topic: "careers", detail: "careers-portfolio" };
  if (/(iang|非本地畢業生|非本地毕业生)/i.test(normalized)) return { topic: "careers", detail: "careers-iang" };
  if (/(履歷|履历|簡歷|简历|resume|\bcv\b)/i.test(normalized)) return { topic: "careers", detail: "careers-cv" };

  if (/(申請|申请|招生|錄取|录取|學位|学位|admission|application|degree|offer)/i.test(normalized)) return { topic: "admissions", detail: null };
  if (/(租房|租屋|房源|房東|房东|業主|业主|rent|housing|flat|apartment)/i.test(normalized)) return { topic: "housing", detail: null };
  if (/(選課|选课|課程|课程|衝堂|冲堂|學分|学分|課表|课表|course|timetable|credit)/i.test(normalized)) return { topic: "courses", detail: null };
  if (/(實習|实习|求職|求职|工作|就業|就业|intern|career|job)/i.test(normalized)) return { topic: "careers", detail: null };
  return { topic: "general", detail: null };
}

function buildGeneralAiAnswer(query, locale) {
  const answers = {
    "zh-Hant": {
      title: "這個問題暫時不在示例知識庫，但可以先把查找路徑整理清楚。",
      summary: `你問的是「${query}」。目前即時搜尋暫未返回可用結果，為避免把不確定內容當成答案，我會先提示補充條件和可信來源。`,
      bullets: [["補充場景", "寫明學校、身份、時間、地區及預算，答案會更接近你的實際情況。"], ["先找官方", "涉及資格、費用或期限時，優先查政府、院校或機構的最新頁面。"], ["再看同學經驗", "用社群帖子補充流程與踩坑，但把經驗和正式規則分開。"]],
      followups: ["我應該補充哪些資料？", "怎樣判斷一個來源是否可靠？", "可以幫我把問題改得更具體嗎？"],
    },
    "zh-Hans": {
      title: "这个问题暂时不在示例知识库，但可以先把查找路径整理清楚。",
      summary: `你问的是“${query}”。目前实时搜索暂未返回可用结果，为避免把不确定内容当成答案，我会先提示补充条件和可信来源。`,
      bullets: [["补充场景", "写明学校、身份、时间、地区及预算，答案会更接近你的实际情况。"], ["先找官方", "涉及资格、费用或期限时，优先查政府、院校或机构的最新页面。"], ["再看同学经验", "用社区帖子补充流程与避坑，但把经验和正式规则分开。"]],
      followups: ["我应该补充哪些资料？", "怎样判断一个来源是否可靠？", "可以帮我把问题改得更具体吗？"],
    },
    en: {
      title: "This question is outside the demo knowledge base, but we can still map a reliable path.",
      summary: `You asked: “${query}”. Live search did not return a usable result, so the MVP is asking for context and pointing to trusted sources instead of inventing a definitive answer.`,
      bullets: [["Add context", "Include your university, status, timing, location, and budget."], ["Check official sources", "For eligibility, fees, or deadlines, start with current government or university pages."], ["Use peer experience carefully", "Community posts help with process and practical tips, but do not replace formal rules."]],
      followups: ["What details should I add?", "How can I judge whether a source is reliable?", "Can you help me make the question more specific?"],
    },
  };
  return answers[locale] || answers["zh-Hant"];
}

function getLiveSearchEndpoint(query, locale) {
  const supportsLocalApi = window.location.hostname.endsWith(".chatgpt.site")
    || window.location.hostname === "localhost"
    || window.location.hostname === "127.0.0.1";
  const base = supportsLocalApi ? "" : LIVE_SEARCH_ORIGIN;
  return `${base}/api/search?q=${encodeURIComponent(query)}&lang=${encodeURIComponent(locale)}`;
}

function buildLiveAiAnswer(results, offlineAnswer, copy) {
  const usableResults = results.filter((result) => result.title && result.url);
  const clip = (value, length = 280) => value.length > length ? `${value.slice(0, length).trim()}…` : value;
  const lead = usableResults.find((result) => result.description)?.description;
  return {
    title: copy.liveTitle,
    summary: lead ? clip(lead) : copy.liveSummary,
    bullets: usableResults.slice(0, 4).map((result) => [result.title, clip(result.description || result.host, 240)]),
    followups: offlineAnswer.followups,
  };
}

function renderAiAnswerMarkup({ query, answer, sources, status, statusMode, sourceHint }) {
  const copy = currentCopy().aiAsk;
  aiAnswerOutput.innerHTML = `
    <section class="ai-answer-card panel">
      <div class="ai-answer-meta">
        <span class="ai-answer-badge">AI</span>
        <strong>${escapeHTML(copy.answerLabel)}</strong>
        <small class="ai-answer-status ${escapeHTML(statusMode)}">${escapeHTML(status)}</small>
      </div>
      <p class="ai-answer-query">${escapeHTML(query)}</p>
      <h3>${escapeHTML(answer.title)}</h3>
      <p class="ai-answer-summary">${escapeHTML(answer.summary)}</p>
      <h4>${escapeHTML(copy.keyTips)}</h4>
      <ol class="ai-answer-points">
        ${answer.bullets.map(([title, body]) => `<li><strong>${escapeHTML(title)}</strong><span>${escapeHTML(body)}</span></li>`).join("")}
      </ol>
      <p class="ai-answer-disclaimer">${escapeHTML(copy.disclaimer)}</p>
      <div class="ai-feedback" role="group" aria-label="${escapeHTML(copy.answerLabel)}">
        <button type="button" data-ai-feedback="helpful" aria-pressed="false">+ ${escapeHTML(copy.feedbackHelpful)}</button>
        <button type="button" data-ai-feedback="unhelpful" aria-pressed="false">− ${escapeHTML(copy.feedbackUnhelpful)}</button>
      </div>
    </section>

    <section class="ai-source-section">
      <div class="ai-answer-section-head">
        <div><h3>${escapeHTML(copy.sourcesTitle)}</h3><p>${escapeHTML(sourceHint)}</p></div>
      </div>
      <div class="ai-source-grid">
        ${sources.map((source) => `
          <a class="ai-source-card" href="${escapeHTML(source.url)}" target="_blank" rel="noreferrer">
            <span>${escapeHTML(source.meta)}</span>
            <strong>${escapeHTML(source.title)}</strong>
            <small>${escapeHTML(copy.sourceLink)} ↗</small>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="ai-followup-section">
      <div class="ai-answer-section-head">
        <div><h3>${escapeHTML(copy.followupsTitle)}</h3><p>${escapeHTML(copy.followupsHint)}</p></div>
      </div>
      <div class="ai-followup-list">
        ${answer.followups.map((followup) => `<button type="button" data-ai-followup="${escapeHTML(followup)}"><span>${escapeHTML(followup)}</span><b>→</b></button>`).join("")}
      </div>
      <form class="ai-followup-bar" id="aiFollowupForm">
        <input id="aiFollowupInput" aria-label="${escapeHTML(copy.askMore)}" placeholder="${escapeHTML(copy.askMore)}" />
        <button class="ai-action" type="submit" aria-label="${escapeHTML(copy.submit)}">→</button>
      </form>
    </section>
  `;
}

async function renderAiAnswer(rawQuery) {
  const query = rawQuery.trim() || currentCopy().aiAsk.defaultQuery;
  const copy = currentCopy().aiAsk;
  const locale = aiAnswerLibrary[userSettings.interfaceLanguage] ? userSettings.interfaceLanguage : "zh-Hant";
  const intent = detectAiAnswerIntent(query);
  const details = aiAnswerDetails[locale] || aiAnswerDetails["zh-Hant"];
  const offlineAnswer = (intent.detail && details[intent.detail])
    || (intent.topic === "general" ? buildGeneralAiAnswer(query, locale) : aiAnswerLibrary[locale][intent.topic]);
  const offlineSources = (intent.detail && aiAnswerDetailSources[intent.detail]) || aiAnswerSources[intent.topic];
  const requestId = ++aiSearchRequestId;

  renderAiAnswerMarkup({
    query,
    answer: offlineAnswer,
    sources: offlineSources,
    status: copy.searching,
    statusMode: "searching",
    sourceHint: copy.sourcesHint,
  });

  try {
    const response = await fetch(getLiveSearchEndpoint(query, locale), { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Live search unavailable");
    const payload = await response.json();
    if (requestId !== aiSearchRequestId || !Array.isArray(payload.results) || !payload.results.length) return;

    const liveAnswer = buildLiveAiAnswer(payload.results, offlineAnswer, copy);
    const officialLabel = locale === "en" ? "Official" : locale === "zh-Hans" ? "官方" : "官方";
    const liveSources = payload.results.slice(0, 8).map((result) => ({
      title: result.title,
      meta: `${result.host}${result.official ? ` · ${officialLabel}` : ""}`,
      url: result.url,
    }));
    const searchedAt = new Date(payload.searchedAt);
    const time = Number.isNaN(searchedAt.getTime())
      ? ""
      : searchedAt.toLocaleTimeString(locale === "en" ? "en-HK" : locale === "zh-Hans" ? "zh-CN" : "zh-HK", { hour: "2-digit", minute: "2-digit" });

    renderAiAnswerMarkup({
      query,
      answer: liveAnswer,
      sources: liveSources,
      status: `${copy.liveLabel}${time ? ` · ${copy.searchedAt} ${time}` : ""}`,
      statusMode: "live",
      sourceHint: copy.liveSourceHint,
    });
  } catch {
    if (requestId !== aiSearchRequestId) return;
    renderAiAnswerMarkup({
      query,
      answer: offlineAnswer,
      sources: offlineSources,
      status: copy.offlineLabel,
      statusMode: "offline",
      sourceHint: copy.sourcesHint,
    });
  }
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
  const levels = currentCopy().memberLevels || memberLevels;
  document.querySelector("#miniLevels").innerHTML = levels
    .slice(0, 5)
    .map((item) => `<div><strong>${escapeHTML(item.level)}</strong><span>${escapeHTML(item.standard)}</span></div>`)
    .join("");

  document.querySelector("#levelGrid").innerHTML = levels
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
document.querySelector("#openAiAnswer").addEventListener("click", () => {
  setView("aiAnswer");
  aiAnswerInput.focus();
});
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

document.querySelector("#aiAnswerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderAiAnswer(aiAnswerInput.value);
});

document.querySelector("#aiPromptChips").addEventListener("click", (event) => {
  const button = event.target.closest("[data-ai-query]");
  if (!button) return;
  aiAnswerInput.value = button.dataset.aiQuery;
  renderAiAnswer(button.dataset.aiQuery);
});

aiAnswerOutput.addEventListener("click", (event) => {
  const followup = event.target.closest("[data-ai-followup]");
  if (followup) {
    aiAnswerInput.value = followup.dataset.aiFollowup;
    renderAiAnswer(followup.dataset.aiFollowup);
    document.querySelector("#aiAnswerView").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const feedback = event.target.closest("[data-ai-feedback]");
  if (!feedback) return;
  document.querySelectorAll("[data-ai-feedback]").forEach((button) => button.setAttribute("aria-pressed", String(button === feedback)));
  showToast(feedback.dataset.aiFeedback === "helpful" ? currentCopy().aiAsk.feedbackHelpful : currentCopy().aiAsk.feedbackUnhelpful);
});

aiAnswerOutput.addEventListener("submit", (event) => {
  if (!event.target.matches("#aiFollowupForm")) return;
  event.preventDefault();
  const followupInput = document.querySelector("#aiFollowupInput");
  if (!followupInput.value.trim()) return;
  aiAnswerInput.value = followupInput.value.trim();
  renderAiAnswer(followupInput.value);
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
  if (button.dataset.tool === "ai-answer") {
    setView("aiAnswer");
    aiAnswerInput.focus();
    return;
  }
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

document.querySelector("#addFixedCourse").addEventListener("click", () => {
  const title = document.querySelector("#fixedCourseName").value.trim();
  const day = document.querySelector("#fixedCourseDay").value;
  const start = document.querySelector("#fixedCourseStart").value;
  const end = document.querySelector("#fixedCourseEnd").value;
  const credits = Number(document.querySelector("#fixedCourseCredits").value);
  const finalExam = document.querySelector("#fixedCourseExam").value === "true";
  if (!title) {
    showToast("請先輸入必修或已選課程名稱。");
    return;
  }
  if (!start || !end || timeToMinutes(start) >= timeToMinutes(end)) {
    showToast("請檢查固定課程的開始和結束時間。");
    return;
  }
  const durationHours = Math.max(1, (timeToMinutes(end) - timeToMinutes(start)) / 60);
  fixedCourses.push({
    title,
    type: "必修／已選",
    day,
    time: `${start}–${end}`,
    startMinutes: timeToMinutes(start),
    endMinutes: timeToMinutes(end),
    hours: Math.ceil(durationHours + 3),
    load: "固定",
    credits,
    finalExam,
    fixed: true,
    description: "你已選定或必須修讀的課程，AI 會保留時段並安排其餘課程。",
    goals: ["safe", "career", "explore"],
  });
  document.querySelector("#fixedCourseName").value = "";
  renderFixedCourses();
  renderPlannerPlan();
  showToast("已鎖定課程，AI 已重新安排剩餘課程。");
});

document.querySelector("#fixedCourseList").addEventListener("click", (event) => {
  const removeButton = event.target.closest(".fixed-course-remove");
  if (!removeButton) return;
  fixedCourses.splice(Number(removeButton.dataset.fixedIndex), 1);
  renderFixedCourses();
  renderPlannerPlan();
  showToast("已移除固定課程並更新方案。");
});

document.querySelector("#downloadTimetable").addEventListener("click", () => {
  const image = document.querySelector("#timetableImage");
  if (!image.src) return;
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "liumer-ai-timetable.png";
  link.click();
  showToast("周課表 PNG 已準備下載。");
});

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

document.querySelector("#plannerSchool").addEventListener("change", () => {
  populatePlannerFacultyOptions();
  syncEntryRouteUI();
  renderPlannerPlan();
});

document.querySelector("#plannerFaculty").addEventListener("change", () => {
  populatePlannerMajorOptions();
  renderPlannerPlan();
});

document.querySelector("#plannerMajor").addEventListener("input", () => {
  renderDegreeRequirements();
});

document.querySelector("#plannerMajor").addEventListener("change", renderPlannerPlan);

document.querySelector("#plannerEntryRoute").addEventListener("change", () => {
  syncEntryRouteUI(true);
  activeDegreeCreditKey = "total";
  renderPlannerPlan();
});

document.querySelector("#plannerYear").addEventListener("change", () => {
  syncEntryRouteUI();
  activeDegreeCreditKey = "total";
  renderPlannerPlan();
});

const degreeRequirementSummary = document.querySelector("#degreeRequirementSummary");
degreeRequirementSummary.addEventListener("click", (event) => {
  const item = event.target.closest(".degree-credit-item");
  if (!item) return;
  showDegreeCreditDetail(item.dataset.creditKey);
});

degreeRequirementSummary.addEventListener("pointerdown", (event) => {
  const item = event.target.closest(".degree-credit-item");
  if (!item) return;
  window.clearTimeout(degreeLongPressTimer);
  degreeLongPressTimer = window.setTimeout(() => {
    showDegreeCreditDetail(item.dataset.creditKey);
    navigator.vibrate?.(20);
  }, 520);
});

["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
  degreeRequirementSummary.addEventListener(eventName, () => window.clearTimeout(degreeLongPressTimer));
});

document.querySelector("#targetCourses").addEventListener("change", () => {
  renderPlannerPlan();
});

document.querySelector("#targetCredits").addEventListener("change", () => {
  renderPlannerPlan();
});

document.querySelectorAll("#plannerCohort, #plannerTrack, input[name='plannerGoal'], #preferredFreeDay, #earliestStart, #latestEnd, #maxWeeklyHours, #groupWorkTolerance, #finalExamPreference, #balancedLoad, #compactDays, #avoidTightGaps").forEach((control) => {
  control.addEventListener("change", renderPlannerPlan);
});

document.body.addEventListener("click", (event) => {
  const courseReviewLink = event.target.closest(".course-review-link");
  if (courseReviewLink) {
    event.stopPropagation();
    renderTopicDetail(Number(courseReviewLink.dataset.questionIndex));
    showToast("已跳到提到這門課的社區討論，可查看同學背景與完整評價。");
    return;
  }
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
  const localizedTips = currentCopy().tips || tips;
  const current = document.querySelector("#liumerLine").textContent;
  const next = localizedTips.find((tip) => tip !== current) || localizedTips[0];
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
populateTargetCreditOptions();
populatePlannerFacultyOptions();
syncEntryRouteUI();
renderFixedCourses();
renderPlannerPlan();
