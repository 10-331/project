/* ===== 左帯 ===== */
.left-strip{
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:18%;
  min-width:68px;
  max-width:96px;
  background:#e6e2b8;
  z-index:5;
}

/* ===== IDカード全体（回転） ===== */
.left-id-card{
  position:absolute;
  left:10px;
  bottom:22px;

  width:220px;

  transform:rotate(-90deg);
  transform-origin:left bottom;

  color:#111;
  line-height:1.12;
}

/* ===== IDラベル ===== */
.left-id-title{
  font-size:11px;
  margin-bottom:4px;
  display:inline-block;
  margin-right:8px;
}

/* ===== IDメイン ===== */
.left-id-main{
  font-size:17px;
  font-weight:700;
  margin-bottom:8px;
  display:inline-block;
  margin-right:12px;
  word-break:normal;
}

/* ===== JST ===== */
.left-id-sub{
  font-size:11px;
  margin-bottom:6px;
}

/* ===== 時刻 ===== */
.left-id-time{
  font-size:11px;
  line-height:1.25;
  margin-bottom:10px;
  font-variant-numeric:tabular-nums;
  word-break:normal;
}

/* ===== バーコード ===== */
.barcode{
  width:180px;
  height:24px;
  background:
    repeating-linear-gradient(
      to right,
      #000 0 2px,
      transparent 2px 4px,
      #000 4px 5px,
      transparent 5px 8px
    );
}

/* ===== 念のため（被り防止） ===== */
.left-id-card *{
  white-space:nowrap;
}