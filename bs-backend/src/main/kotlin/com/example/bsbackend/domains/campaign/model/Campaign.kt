package com.example.bsbackend.domains.campaign.model

import java.sql.Date
import javax.persistence.*


@Entity(name = "campaign")
data class Campaign(
    @Column(name = "campaign_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var campaignId: Int = 0,
    @Column(name = "campaign_name") var campaignName: String,
    @Column(name = "start_date") var startDate: Date,
    @Column(name = "end_date") var endDate: Date,
    @Column(name = "percent") var percent: Int
)
