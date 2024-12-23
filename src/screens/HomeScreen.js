import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import TeamScore from '../components/TeamScore';
import ResetButton from '../components/ResetButton';

const HomeScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert('Winner!', 'Team A wins!');
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert('Winner!', 'Team B wins!');
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Futsal Match Scorer</Text>
      <View style={styles.rowContainer}>
        <TeamScore
          teamName="Team A"
          score={scoreA}
          onIncrease={() => increaseScore('A')}
          onDecrease={() => decreaseScore('A')}
        />
        <TeamScore
          teamName="Team B"
          score={scoreB}
          onIncrease={() => increaseScore('B')}
          onDecrease={() => decreaseScore('B')}
        />
      </View>
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf2f8',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f7aec',
    marginBottom: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
