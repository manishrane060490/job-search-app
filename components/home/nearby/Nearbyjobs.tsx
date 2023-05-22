import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SIZES, COLORS } from '../../../constants';

import styles from './nearbyjobs.style';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router = useRouter();
  
  const {error, data, isLoading} = useFetch('search', {
    query: "React Developer Jobs in Germany",
    num_pages: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
            data?.map(job => (
              <NearbyJobCard
                job={job}
                key={`nearby-jobs-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )
        }
      </View>
      
    </View>
  )
}

export default Nearbyjobs