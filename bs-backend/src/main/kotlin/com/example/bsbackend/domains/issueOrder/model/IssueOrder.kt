package com.example.bsbackend.domains.issueOrder.model

import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.order.model.Order
import javax.persistence.*

@Entity(name = "issue_order")
data class IssueOrder(
    @Id
    @Column(name = "issue_order_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "issue_order_issue_order_id_seq")
    @SequenceGenerator(
        name = "issue_order_issue_order_id_seq",
        sequenceName = "issue_order_issue_order_id_seq",
        allocationSize = 100
    )
    var issueOrderId: Int = 0,
    @Column(name = "count") var count: Int,
    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id") var order: Order,
    @OneToOne
    @JoinColumn(name = "issue_id", referencedColumnName = "issue_id") var issue: Issue
)
