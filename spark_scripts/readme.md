To run the scripts, run spark-submit using the following:

spark-submit --conf spark.cassandra.connection.host=172.17.0.2 --conf spark.cassandra.connection.host=172.17.0.3 \
                                                          --packages datastax:spark-cassandra-connector:2.4.0-s_2.11 \
                                                          load_data_into_cassandra.py --cass_keyspace ecommerce_data \
                                                          --cass_table user_info --csv_file 2019-Oct.csv --incremental_run 0


spark-submit --conf spark.cassandra.connection.host=172.17.0.2 --conf spark.cassandra.connection.host=172.17.0.3\
                            --packages datastax:spark-cassandra-connector:2.4.0-s_2.11,org.mongodb.spark:mongo-spark-connector_2.11:2.4.2 \
                            --conf spark.mongodb.output.uri=mongodb://127.0.0.1:27017 get_user_count_per_day.py --cass_keyspace ecommerce_data \
                            --cass_table user_info --incremental_run 0 --mongo_db database_project --mongo_collection user_count_per_day


spark-submit --conf spark.cassandra.connection.host=172.17.0.2 --conf spark.cassandra.connection.host=172.17.0.3 \
              --packages datastax:spark-cassandra-connector:2.4.0-s_2.11,org.mongodb.spark:mongo-spark-connector_2.11:2.4.2 \
              --conf spark.mongodb.output.uri=mongodb://127.0.0.1:27017 get_user_count_per_hour.py --cass_keyspace ecommerce_data \
              --cass_table user_info --incremental_run 0 --mongo_db database_project --mongo_collection user_count_per_hour
