import React from 'react';
import { View, Button, Pressable, Text, Image } from 'react-native';
import { Post, State } from '../../type';
import styles from '../../styles/components/PostStyles';
import { useSelector } from 'react-redux';

function PostItem(props: { post: Post }) {
  const comments = useSelector((state: State) => {
    return state.comment;
  });
  const users = useSelector((state: State) => {
    return state.users;
  });
  const postAuthor = users.find(user => props.post.userId == user.id);

  let postComments = comments.filter(item => {
    return item.postId == props.post.id;
  });

  const CommentSection = postComments.map(item => {
    const user = users.find(user => item.id == user.id);
    return (
      <View style={styles.comment} key={item.id}>
        <Image
          style={styles.avatarImg}
          source={require('../../assets/img/Avatar.png')}
        />
        <View>
          <Text>{user?.name}</Text>
          <Text style={styles.commentText}>{item.text}</Text>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.post}>
      <View style={styles.postMain}>
        <View style={styles.authorWrapper}>
          <Image
            style={styles.avatarImg}
            source={require('../../assets/img/Avatar.png')}
          />
          <Text>{postAuthor?.name}</Text>
        </View>
        <View>
          <Text style={styles.postTitle}>{props.post.title}</Text>
          <Text>{props.post.content}</Text>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.postImg}
              source={require('../../assets/img/postImg.jpg')}
            />
          </View>
        </View>
      </View>
      <View style={styles.commentWrapper}>{CommentSection}</View>
    </View>
  );
}

export default PostItem;
