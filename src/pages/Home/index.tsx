import AccessibilityGroup from 'components/AccessibilityGroup';
import Avatar from 'components/Avatar';
import Header from 'components/Header';
import React from 'react';
import {
  FaRegComment,
  HiHeart,
  HiOutlineHeart,
  IoShareSocial,
  BsThreeDots
} from 'react-icons/all';
import {
  Container,
  Content,
  ContentContainer,
  Post,
  PostContainer,
  ChatContainer,
  Chat,
  Reply,
  Status,
  AddComment
} from './styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <AccessibilityGroup />
        <Content>
          <PostContainer>
            <Post>
              <header>
                <div>
                  <div>
                    <Avatar size={50} />
                    <span>@username</span>
                  </div>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
                <p>tenha um bom dia, ou boa noite</p>
              </header>
              <section>
                <img
                  src="https://images.unsplash.com/photo-1593351886092-14e13b756323?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </section>
              <footer>
                <Status>
                  <button type="button">
                    <HiHeart />
                    <HiOutlineHeart />
                    <span>
                      <span>200</span> <span>likes</span>
                    </span>
                  </button>
                  <button type="button">
                    <FaRegComment />
                    <span>
                      <span>20</span> <span>commments</span>
                    </span>
                  </button>
                  <button type="button">
                    <IoShareSocial />
                    <span>
                      <span>2</span> <span>shares</span>
                    </span>
                  </button>
                </Status>
                <AddComment>
                  <Avatar size={40} />
                  <input type="text" placeholder="Adicione um comentário" />
                </AddComment>
              </footer>
            </Post>
            <Post>
              <header>
                <div>
                  <div>
                    <Avatar size={50} />
                    <span>@username</span>
                  </div>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
                <p>heeelloo my frieeends!!!!!!!!</p>
              </header>
              <footer>
                <Status>
                  <button type="button">
                    <HiHeart />
                    <HiOutlineHeart />
                    <span>
                      <span>200</span> <span>likes</span>
                    </span>
                  </button>
                  <button type="button">
                    <FaRegComment />
                    <span>
                      <span>20</span> <span>commments</span>
                    </span>
                  </button>
                  <button type="button">
                    <IoShareSocial />
                    <span>
                      <span>2</span> <span>shares</span>
                    </span>
                  </button>
                </Status>
                <AddComment>
                  <Avatar size={40} />
                  <input type="text" placeholder="Adicione um comentário" />
                </AddComment>
              </footer>
            </Post>
          </PostContainer>
          <ChatContainer>
            <Chat>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
              <Reply>
                <div>
                  <header>
                    <Avatar size={50} />
                    <div>
                      <strong>
                        <span>@username</span> <span>Hoje às 18:00</span>
                      </strong>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </header>
                  <button type="button">
                    <BsThreeDots />
                  </button>
                </div>
              </Reply>
            </Chat>
          </ChatContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Home;
