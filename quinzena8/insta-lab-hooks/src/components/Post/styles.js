import styled from "styled-components";

export const PostContainer = styled.div`
  border: 2px solid;
  border-image: linear-gradient(135deg, #ff0000 0%, #ff00a8 100%) 1;
  padding:.2%;
  width: 50vh;
  margin-bottom: 2%;
  background-color: #fff;
`;

export const PostHeader = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  p {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const UserPhoto = styled.img`
  height: 10%;
  width: 10%;
  margin-right: 5%;
  border-radius: 50%;
`;

export const PostPhoto = styled.img`
  width: 100%;
`;

export const CommentContainer = styled.div`
  margin-left: 5%;
`;
