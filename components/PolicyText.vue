<template>
  <div class="policy">
    <h1>サイトポリシー</h1>
    <div class="policy__paragraph">
      <div class="policy__paragraph">
        <h2>適用範囲</h2>
        <p>
          本ポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>Cookie（クッキー）</h2>
        <p>
          Cookie（クッキー）は、利用者のサイト閲覧履歴を、利用者のコンピュータに保存しておく仕組みです。
        </p>
        <p>
          利用者はCookie（クッキー）を無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
        </p>
        <p>
          ただし、Cookie（クッキー）を拒否した場合、当サイトが正しく動作しない場合があります。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>アクセス解析</h2>
        <p>
          当サイトでは、サイトの分析と改善のためにGoogleが提供している「Googleアナリティクス」を利用しています。
        </p>
        <p>
          このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。
        </p>
        <p>
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>免責事項</h2>
        <p>
          当サイトのコンテンツ・情報について、正確性や安全性を保証するものではありません。
        </p>
        <p>
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>著作権</h2>
        <p>
          独自の文章及びアプリケーションソフトウェアの所有権及び知的財産権は、当方に帰属します。
        </p>
        <p>
          各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>サイトポリシーの変更</h2>
        <p>
          当サイトは、本サイトポリシーの内容を適宜見直し、その改善に努めます。
        </p>
        <p>本サイトポリシーは、事前の予告なく変更することがあります。</p>
        <p>
          本サイトポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
        </p>
      </div>
      <div class="policy__paragraph">
        <h2>出典</h2>
        <p>
          当サイトは、以下のサイトのAPIを使用させていただいております。情報元、加工元様に感謝申し上げます。
        </p>
        <p>
          <a href="https://nlftp.mlit.go.jp/" class="source-link"
            >位置参照情報」(国土交通省)</a
          >の加工情報・<a
            href="https://geoapi.heartrails.com/"
            class="source-link"
            >「「HeartRails Geo API」(HeartRails Inc.)</a
          >
        </p>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts"></script>
<style lang="scss" scoped>
HTML {
  font-family: "M PLUS Rounded 1c";
  color: #776056;
  touch-action: manipulation;
}
.link {
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
}
.source-link {
  text-align: center;
  text-decoration: underline;
}
.policy {
  margin: 0 16px;
  padding-top: 36px;
  padding-bottom: 36px;
  h1 {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  h2:before,
  h2:after {
    border-top: 1px solid;
    content: "";
    width: 3em; /* 線の長さ */
  }
  h2:before {
    margin-right: 1em; /* 文字の右隣 */
  }
  h2:after {
    margin-left: 1em; /* 文字の左隣 */
  }
  &__paragraph {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

@media screen and (min-width: 700px) {
  .policy {
    padding: 24px 8px;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
}
</style>
