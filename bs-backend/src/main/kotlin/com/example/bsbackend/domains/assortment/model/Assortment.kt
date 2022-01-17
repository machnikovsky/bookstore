package com.example.bsbackend.domains.assortment.model

import com.example.bsbackend.domains.bookstore.model.Bookstore
import com.example.bsbackend.domains.issue.model.entity.Issue
import javax.persistence.*

@Entity(name = "assortment")
data class Assortment(
    @Id
    @Column(name = "assortment_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "assortment_assortment_id_seq")
    @SequenceGenerator(name="assortment_assortment_id_seq", sequenceName="assortment_assortment_id_seq", allocationSize=100)
    var assortmentId: Int = 0,
    @Column(name = "count") var count: Int,
    @OneToOne
    @JoinColumn(name = "bookstore_id", referencedColumnName = "bookstore_id") var bookstore: Bookstore,
    @OneToOne
    @JoinColumn(name = "issue_id", referencedColumnName = "issue_id") var issue: Issue
)
