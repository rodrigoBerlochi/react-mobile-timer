import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bigNumber: {
        fontSize: 90
    }
});

const Counter = ({count}) => {
    return (
        <Text style={styles.bigNumber}>
            {count}
        </Text>
    );
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
}

export default Counter;