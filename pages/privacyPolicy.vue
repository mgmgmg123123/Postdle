<template>
  <section class="main">
    <div class="main__inner">
      <Tittle />
      <div class="policy">
        <h1>プライバシーポリシー</h1>
        <div class="policy__paragraph">
          <h2>基本方針</h2>
          <p>
            当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
          </p>
        </div>
        <div class="policy__paragraph">
          <h2>適用範囲</h2>
          <p>
            本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
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
            ただし、Cookie（クッキー）を拒否した場合、当サイトのいくつかのサービス・機能が正しく動作しない場合があります。
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
            当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。
          </p>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <p>
            当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
        </div>
        <div class="policy__paragraph">
          <h2>著作権・肖像権</h2>
          <p>
            当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。
          </p>
          <p>
            また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
          </p>
          <p>
            各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
          </p>
        </div>
        <div class="policy__paragraph">
          <h2>リンク</h2>
          <p>
            当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。
          </p>
          <p>
            引用する際は、引用元の明記と該当ページへのリンクをお願いします。
          </p>
          <p>
            ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。
          </p>
        </div>
        <div class="policy__paragraph">
          <h2>本プライバシーポリシーの変更</h2>
          <p>
            当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。
          </p>
          <p>
            本プライバシーポリシーは、事前の予告なく変更することがあります。
          </p>
          <p>
            本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
          </p>
        </div>
        <div class="link">
          <router-link to="/">トップへ戻る</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts"></script>
<style>
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
.policy {
  margin: 0 16px;
  padding-top: 36px;
  padding-bottom: 36px;
}
.policy h1 {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}
.policy h2 {
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center; /* 垂直中心 */
  justify-content: center; /* 水平中心 */
  padding-top: 8px;
  padding-bottom: 8px;
}
.policy h2:before,
.policy h2:after {
  border-top: 1px solid;
  content: "";
  width: 3em; /* 線の長さ */
}
.policy h2:before {
  margin-right: 1em; /* 文字の右隣 */
}
.policy h2:after {
  margin-left: 1em; /* 文字の左隣 */
}
.policy__paragraph {
  padding-top: 16px;
  padding-bottom: 16px;
}
@media screen and (min-width: 700px) {
  .policy {
    padding: 24px 8px;
    width: 100%;
    max-width: 600px;
    margin: auto;
    /* margin: 0 16px;
  padding-top: 40px;
  padding-bottom: 40px; */
  }
}
</style>
