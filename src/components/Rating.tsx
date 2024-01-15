import React from 'react';
import {View, StyleSheet} from 'react-native';
import FilledStarIcon from '../../assets/images/filledStar.svg';
import HalfFilledStarIcon from '../../assets/images/halfStar.svg';
import EmptyStarIcon from '../../assets/images/emptyStar.svg';

interface Props {
  rating: number;
}

const Rating: React.FC<Props> = ({rating}) => {
  if (rating >= 5) {
    rating = 5;
  }
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<FilledStarIcon key={i} width={16.93} height={16.93} />);
  }

  if (hasHalfStar) {
    starIcons.push(
      <HalfFilledStarIcon key={filledStars} width={16.93} height={16.93} />,
    );
  }

  const emptyStars = 5 - starIcons.length;

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <EmptyStarIcon key={filledStars + i + 1} width={16.93} height={16.93} />,
    );
  }

  return (
    <View style={styles.container}>
      {starIcons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
