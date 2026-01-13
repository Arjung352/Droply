import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
  id: uuid("id").primaryKey().defaultRandom(),
  //   basic files/folder information
  name: text("name").notNull(),
  path: text("path").notNull(),
  size: integer("size").notNull(),
  type: text("type").notNull(),

  //   storage information
  fileUrl: text("file_url").notNull(),
  thumbnailURL: text("thumbnail_url"),

  //   ownership
  userId: text("user_id").notNull(),
  parentId: uuid("parent_id"),

  //   flags for file/folder
  isFolder: boolean("is_folder").default(false).notNull(),
  isStarred: boolean("is_starred").default(false).notNull(),
  isTrash: boolean("is_trash").default(false).notNull(),

  //   timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// relationships

export const fileRelations = relations(files, ({ one, many }) => ({
  parent: one(files, {
    fields: [files.parentId],
    references: [files.id],
    relationName: "file_parent",
  }),
  children: many(files, {
    relationName: "file_parent",
  }),
}));

//Type defination

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;
