package com.example.bsbackend.domains.assortment.model

import com.example.bsbackend.domains.bookstore.model.Bookstore
import com.example.bsbackend.domains.issue.model.Issue
import javax.persistence.*

@Entity(name = "assortment")
data class Assortment(
    @Column(name = "assortment_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var assortmentId: Int = 0,
    @Column(name = "count") var count: Int,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "bookstore_id", referencedColumnName = "bookstore_id") var bookstore: Bookstore,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "issue_id", referencedColumnName = "issue_id") var issue: Issue
)
