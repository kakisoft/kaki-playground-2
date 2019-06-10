import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>このサイトについて</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                公園を中心とした、子供と遊ぶ場所をかいてます。
              </p>
              <p>
              コンセプトは、<br />
              <b>「歩いて行ける、子供と遊ぶ場所！」</b><br />
              （対象：福岡市周辺）  
              </p>

              <p>
              ちっちゃな子供がいると行動範囲が限定される！  <br />
              旅行に行っても子供たちが覚えてないから思い出にもならないし、子供かかえたままだと親側も楽しめない！  
              </p>

              <p>
              そんな悩みをかかえ、  <br />
              「じゃ、せめて周辺で遊べる場所をピックアップしていくかー！」  <br />
              という動機で始めたサイト。

              </p>

              <p>
              もう少し言えば、  <br />
              「公園を探すサービスがいくつかあるけど、全国区で探す必要なくない？  
              せいぜい半径５キロぐらいの範囲がカバーできてればそれでいいのでは？」  <br />
              と思ったのがきっかけ。
              </p>

              <p>
              別に公園に限らず、小さな子供が遊べる場所であれば取り上げて行こうかと思ってます。  
              </p>

              <p>
              だいたい、週１ペースで更新してます。
              </p>

            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
