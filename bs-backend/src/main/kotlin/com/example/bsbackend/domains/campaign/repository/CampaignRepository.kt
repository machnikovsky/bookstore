package com.example.bsbackend.domains.campaign.repository

import com.example.bsbackend.domains.campaign.model.Campaign
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface CampaignRepository : JpaRepository<Campaign, Int>

