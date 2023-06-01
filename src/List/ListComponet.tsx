import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export const SmallItem = ({ title, value }) => {
    return (
        <View>
            <Text style={{
                color: '#fff', fontWeight: '700',
                fontSize: 15,
                textAlign: 'center'
            }}>{title}</Text>
            <Text style={{
                color: '#fff', fontWeight: '400',
                fontSize: 12,
                paddingTop: 6
            }}>{value}</Text>
        </View>
    )
}



export const ListItem = ({ brand }) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.brandName}>{brand.name}</Text>
                    <Text style={styles.brandCategory}>{brand.category}</Text>
                </View>
                <Text style={[styles.sharePrice, { color: brand.sharePrice > brand?.perValSharePrice ? '#4B994C' : '#D73842' }]}>
                    ₹ {brand.sharePrice.toFixed(2)} ({brand.percentageDifference})
                </Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#E7E7E7' }} />
        </View>
    );
};

export const ListHeader = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 14 }}>
            <View style={{ backgroundColor: '#6771E4', borderRadius: 10, padding: 14, marginVertical: 14 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 22,
                        lineHeight: 24,
                        color: "#fff",
                        paddingVertical: 6
                    }}>
                        Summary
                    </Text>
                    <View style={{ borderWidth: 1, borderRadius: 8, borderColor: '#fff', flexDirection: 'row', flex: 0.5, paddingHorizontal: 8 }}>
                        <Text style={{ alignSelf: 'center', color: '#fff' }}>Expiry</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 }}>
                    <SmallItem title={'Capital:'} value={'₹ 5.13 Cr'} />
                    <SmallItem title={'P&L:'} value={'₹ -43.66 k (-0.009%)'} />
                    <SmallItem title={'Value:'} value={'₹ -43.66 L(43)'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    brandName: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6771E4'
    },
    brandCategory: {
        fontSize: 12,
        color: '#888',
        paddingVertical: 6
    },
    sharePrice: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});