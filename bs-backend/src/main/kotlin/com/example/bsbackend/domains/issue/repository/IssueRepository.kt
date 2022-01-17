package com.example.bsbackend.domains.issue.repository

import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.model.enum.BookType
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository
import javax.persistence.EntityManager
import javax.persistence.TypedQuery


@Repository
interface IssueRepository : JpaRepository<Issue, Int> {
    fun findIssueByIssueId(issueId: Int): Issue?
    fun findFirstByBookBookId(bookId: Int): Issue?
    fun findAllByBookBookId(bookId: Int): List<Issue>

    fun findFirstByBookBookIdAndBookType(bookId: Int, bookType: BookType): MutableList<Issue>?
}

@Component
class IssueRepositoryImpl(
    private val entityManager: EntityManager
) {
    fun findFirstByBookBookIdAndBookType(bookId: Int, bookType: BookType): MutableList<Issue>? {
        val hql = "SELECT i FROM Issue i WHERE i.book.bookId = :id AND i.bookType = '" + bookType.name +"'"
        val query: TypedQuery<Issue> = entityManager.createQuery(hql, Issue::class.java)
        query.setParameter("id", bookId)

        return query.resultList
    }

}