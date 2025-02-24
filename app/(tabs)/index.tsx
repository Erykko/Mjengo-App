import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Project Overview</Text>
      </View>

      <View style={styles.budgetCard}>
        <Text style={styles.cardTitle}>Total Budget</Text>
        <Text style={styles.budgetAmount}>KSH 5,000,000</Text>
        <View style={styles.budgetProgress}>
          <View style={[styles.progressBar, { width: '65%' }]} />
        </View>
        <Text style={styles.budgetRemaining}>KSH 1,750,000 remaining</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/expenses/add')}>
          <Ionicons name="add-circle" size={24} color="#192f6a" />
          <Text style={styles.actionText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/documents/scan')}>
          <Ionicons name="scan" size={24} color="#192f6a" />
          <Text style={styles.actionText}>Scan Document</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push('/progress/capture')}>
          <Ionicons name="camera" size={24} color="#192f6a" />
          <Text style={styles.actionText}>Capture Progress</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {/* Activity items */}
        <View style={styles.activityItem}>
          <Ionicons name="receipt" size={24} color="#666" />
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Cement Purchase</Text>
            <Text style={styles.activityMeta}>Today, 10:30 AM • KSH 12,500</Text>
          </View>
        </View>

        <View style={styles.activityItem}>
          <Ionicons name="person" size={24} color="#666" />
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Labor Payment</Text>
            <Text style={styles.activityMeta}>Yesterday • KSH 8,000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#192f6a',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  budgetCard: {
    margin: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  budgetAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#192f6a',
    marginBottom: 15,
  },
  budgetProgress: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  budgetRemaining: {
    fontSize: 14,
    color: '#666',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    color: '#192f6a',
  },
  recentActivity: {
    backgroundColor: '#fff',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityDetails: {
    marginLeft: 15,
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: '#333',
  },
  activityMeta: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});