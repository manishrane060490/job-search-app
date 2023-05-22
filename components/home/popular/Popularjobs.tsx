import React, { useState } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SIZES, COLORS } from '../../../constants';

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  
  const {error, data, isLoading} = useFetch('search', {
    query: "React Developer Jobs in Germany",
    num_pages: 1
  });

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text  style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary}/>
          ) : error ? 
          (
            <Text>Something Went Wrong </Text>
          ) : 
          (
            <FlatList 
              data={data}
              renderItem={({item}) => (
                <PopularJobCard item={item} selectedJob={selectedJob}  handleCardPress={() => handleCardPress(item)}/>
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{columnGap: SIZES.small}}
              horizontal
            />
          )
        }
      </View>
      
    </View>
  )
}

export default Popularjobs