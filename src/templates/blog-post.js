import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import * as Scroll from 'react-scroll';
import Layout from '../components/layout'
import PageTitleJournalSingle from '../blocks/page-title/PageTitleJournalSingle';
import JournalDescription from '../blocks/journal/JournalDescription';
import JournalTags from '../blocks/journal/JournalTags';
import BackToHome from '../components/button/BackToHome';
let scroll = Scroll.animateScroll;

class BlogPostTemplate extends React.Component {

  render() {
    const scrollToTop = () => {
      scroll.scrollToTop(100, { smooth: true });
    }
    const post = get(this.props, 'data.contentfulPost')

    return (
      <>
        <Layout location={this.props.location}>
          <Helmet
            link={[
              { rel: 'canonical', href: `https://rike.dev/${post.slug}/` }
            ]}
          >
            <title>rike.dev - {post.title}</title>
            <meta name="description" content={post.description?.description} />
          </Helmet>
          <PageTitleJournalSingle text={post.title} />

          <section id="page-content" className="spacer m-top-sm">
            <div className="wrapper">
              <div id="single">
                <div className="row gutter-width-lg">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                    <JournalTags text={post.category} />

                    <JournalDescription text={post.text.childMarkdownRemark.html} />


                    <div className="spacer m-top-xl text-right">
                      <BackToHome />
                    </div>

                  </div>
                  <div className="align-self-end p-left-scroll">
                    <a className="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex"
                      onClick={scrollToTop}
                    >
                      <span className="vertical-text">
                        <span>S</span>
                        <span>c</span>
                        <span>r</span>
                        <span>o</span>
                        <span>l</span>
                        <span>l</span>
                      </span>

                      <span className="align-self-end">
                        <i className="icon-c icon-arrow-up" />
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      category
      slug
      publishedAt(formatString: "MMMM Do, YYYY")
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
