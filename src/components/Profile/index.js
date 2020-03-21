import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.TitleContainer>
          <S.ProfileAuthor>{title}</S.ProfileAuthor>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.TitleContainer>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
