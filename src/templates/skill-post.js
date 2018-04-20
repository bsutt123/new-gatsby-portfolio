import React from 'react';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="skill-post-container">
      <div className="skill-post">
        <div className="skill-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}


export const skillQuery = graphql`
  query SkillPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
