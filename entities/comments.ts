// entities/Comment.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  video_id!: string;

  @Column({ length: 100 })
  cid!: string;

  @Column({ length: 100 })
  author!: string;

  @Column("text")
  text!: string;

  @Column({ type: "boolean", nullable: true })
  is_judol?: boolean;

  @Column({ type: "boolean", default: false })
  is_spam!: boolean;

  @Column({ type: "int", nullable: true })
  sentimen?: number;

  @Column({ type: "boolean", default: true })
  is_delete!: boolean;
}

export type CommentType = {
  id: number;
  video_id: string;
  cid: string;
  author: string;
  text: string;
  is_judol?: boolean | null;
  is_spam: boolean;
  sentimen?: number | null;
  is_delete: boolean;
};
